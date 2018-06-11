<?php
/*
 * DESTINY 2 - PHP DAILY MANIFEST UPDATE
 *
 * +----------------------------------------+
 * |    Grabs Bungie's Destiny 2 Manifest   |
 * |    everyday to get new and/or          |
 * |    updated content. To be displayed    |
 * |    on a HTML webpage using formatted   |
 * |    output.                             |
 * |                                        |
 * |    Made by Niven Francis.              |
 * |    Using Eclipse, PHP, Guzzle,         |
 * |    Composer, and Adam Burton Destiny   |
 * |    2 PHP API Wrapper. Heavily edited   |
 * |    to work with third party Destiny    |
 * |    JSON files.                         |
 * |    2018                                |
 * +----------------------------------------+
 *
 *          ~~~~USEFUL LINKS~~~~
 * Bungie.Net API   -   https://bungie-net.github.io/multi/operation_get_Destiny2-GetPublicMilestoneContent.html
 * Raid Rotation    -   https://github.com/vpzed/Destiny2-API-Info/wiki/Leviathan-Raid-Encounter-Rotation-Info
 * Manifest Lookup  -   https://destiny.plumbing
 * Hash Values      -   https://destinysets.com/data
 * JSON Viewer      -   http://jsonviewer.stack.hu
 * PHP Wrapper      -   https://github.com/adamdburton/destiny-2-api-client
 *
 */

if(file_exists("manifest_data.js")) {
    $file = "manifest_data.js";
    $data = file($file);
    $file_date = substr(trim($data[count($data)-2]), 2);
    $curr_date = date("i");
    
    if(abs(($curr_date) - ($file_date)) <= 4) {
      //  return;
    }
}

require __DIR__.'/vendor/autoload.php';

// Raid Order
// Starting from 1685065161 and downwards, power is 330. Otherwise 300.
$raid_order = array(
    2693136605 => "Gauntlet, Pleasure Gardens, Royal Pools",
    2693136604 => "Gauntlet, Royal Pools, Pleasure Gardens",
    2693136602 => "Pleasure Gardens, Gauntlet, Royal Pools",
    2693136603 => "Pleasure Gardens, Royal Pools, Gauntlet",
    2693136600 => "Royal Pools, Gauntlet, Pleasure Gardens",
    2693136601 => "Royal Pools, Pleasure Gardens, Gauntlet",
    1685065161 => "Gauntlet, Pleasure Gardens, Royal Pools",
    757116822  => "Gauntlet, Royal Pools, Pleasure Gardens",
    417231112  => "Pleasure Gardens, Gauntlet, Royal Pools",
    3446541099 => "Pleasure Gardens, Royal Pools, Gauntlet",
    2449714930 => "Royal Pools, Gauntlet, Pleasure Gardens",
    3879860661 => "Royal Pools, Pleasure Gardens, Gauntlet"
);

// Bungie API Key
$api = new AdamDBurton\Destiny2ApiClient\Api('4db5fe5005444fe3b5d1186b448b75dd');
$fetch = $api->destiny2()->getPublicMilestones()->getResponse()->getBody();
$json_milestone = json_decode($fetch, true);

//var_dump($json_milestone); echo "\n--------------------------\n";

$file_output = "var data = [\n";
// Parse Manifest
foreach($json_milestone["Response"] as $milestone) {
    $display = "{\n";
    $milestoneHash = 0; $questItemHash = 0; $questItemHash2 = 0; $activityHash = 0; $objectiveHash = ""; $modifiers = ""; $activityModeHash = 0;
    foreach($milestone as $key => $val) {
        if($key == "milestoneHash") {
            $milestoneHash = $val;
            //echo "milestoneHash     - " . $milestoneHash . "\n";
        }
        if($key == "availableQuests") {
            foreach($milestone["availableQuests"][0] as $q => $val) {
                if($q == "questItemHash") {
                    $questItemHash = $val;
                    //echo "questItemHash     - " . $questItemHash . "\n";
                }
                if($q == "activity") {
                    foreach($milestone["availableQuests"][0]["activity"] as $a => $val) {
                        if($a == "activityHash") {
                            $activityHash = $val;
                            //echo "activityHash      - " . $activityHash . "\n";
                        }
                        if($a == "activityModeHash") {
                            $activityModeHash = $val;
                        }
                    }
                }
                if($q == "challenges") {
                    foreach($milestone["availableQuests"][0]["challenges"] as $c => $val) {
                        if($milestone["availableQuests"][0]["challenges"][$c]["activityHash"] == $activityHash)
                            $objectiveHash = $objectiveHash . $milestone["availableQuests"][0]["challenges"][$c]["objectiveHash"] . " ";
                            
                    }
                    //echo "objectiveHash     - " . $objectiveHash . "\n";
                }
            }
            // Extra Meditation Exception
            if(count(array_keys($milestone["availableQuests"])) == 2) {
                foreach($milestone["availableQuests"][1] as $q => $val) {
                    if($q == "questItemHash") {
                        $questItemHash2 = $val;
                        //echo "questItemHash     - " . $questItemHash . "\n";
                    }
                }
            }
        }
    }
    
    // Translate hashes to readable data
    $arr = $api->destiny2()->getDestinyEntityDefinition2("DestinyMilestoneDefinition", $questItemHash)->getResponse()->getBody();
    $arr = json_decode($arr, true);
    foreach($arr as $ms) {
        if($ms['hash'] == $milestoneHash) {
            if($questItemHash != 0) {
                
                // ------------------
                // DISPLAY PROPERTIES
                // ------------------
                
                if(in_array("displayProperties", array_keys($ms))) {
                    $display = $display . "\"NAME\": \"" . $ms['displayProperties']["name"] . "\",\n";
                    $display = $display .  "\"DESC\": \"" . $ms['displayProperties']["description"] . "\",\n";
                    if($ms['displayProperties']["hasIcon"])
                        $display = $display .  "\"ICOS\": \"" . "https://www.bungie.net" . $ms['displayProperties']["icon"] . "\",\n";
                }
                else {
                    foreach($ms['quests'][$questItemHash] as $q) {
                        if($q == "displayProperties") {
                            $display = $display .  "\"NAME\": \"" . $ms['quests'][$questItemHash]['displayProperties']["name"] . "\",\n";
                            $display = $display .  "\"DESC\": \"" . $ms['quests'][$questItemHash]['displayProperties']["description"] . "\",\n";
                            if($ms['quests'][$questItemHash]['displayProperties']["hasIcon"])
                                $display = $display .  "\"ICOS\": \"" . "https://www.bungie.net" . $ms['quests'][$questItemHash]['displayProperties']["icon"] . "\",\n";
                        }
                    }
                }
                
                //                   ~~~~~ SPECIFIC EXCEPTIONS ~~~~~
                
                // ------------
                // CALL TO ARMS
                // ------------
                
                if(in_array("friendlyName", array_keys($ms)) && $ms["friendlyName"] == "CallToArms") {
                    $display = $display .  "\"ICOB\": \"" . "https://www.bungie.net" . $ms['quests'][$questItemHash]["overrideImage"] . "\",\n";
                }
                
                // ----
                // RAID
                // ----
                
                if(in_array("friendlyName", array_keys($ms)) && $ms["friendlyName"] == "Raid") {
                    $display = $display .  "\"RAID\": \"" . $raid_order[$activityHash] . "\",\n";
                    $display = $display .  "\"ICOS\": \"" . "https://www.bungie.net" . $ms['quests'][$questItemHash]["displayProperties"]["icon"] . "\",\n";
                    $display = $display .  "\"ICOB\": \"" . "https://www.bungie.net" . $ms['quests'][$questItemHash]["overrideImage"] . "\",\n";
                    
                }
                
                // -----------
                // MEDITATIONS
                // -----------
                
                if(in_array("friendlyName", array_keys($ms)) && $ms["friendlyName"] == "Meditations") {
                    $arr = $api->destiny2()->getDestinyEntityDefinition2("DestinyActivityDefinition", $activityHash)->getResponse()->getBody();
                    $arr = json_decode($arr, true);
                    
                    foreach($arr as $act) {
                        if($act["hash"] == $questItemHash) {
                            $display = $display .  "\"MEDI\": \"" . str_replace('"', '\"', $act["displayProperties"]["name"]) . " - " . str_replace('"', '\"', $act["displayProperties"]["description"]) . "\",\n";
                            $display = $display .  "\"ICOB\": \"" . "https://www.bungie.net" . $act["displayProperties"]["icon"] . "\",\n";
                            $display = $display .  "\"MAPI\": \"" . "https://www.bungie.net" . $act["pgcrImage"] . "\",\n";
                            
                        }
                        if($act["hash"] == $questItemHash2) {
                            $display = $display .  "\"MEDI\": \"" . str_replace('"', '\"', $act["displayProperties"]["name"]) . " - " . str_replace('"', '\"', $act["displayProperties"]["description"]) . "\",\n";
                            $display = $display .  "\"ICOB\": \"" . "https://www.bungie.net" . $act["displayProperties"]["icon"] . "\",\n";
                            $display = $display .  "\"MAPI\": \"" . "https://www.bungie.net" . $act["pgcrImage"] . "\",\n";
                        }
                    }
                }
                
                // ---------
                // NIGHTFALL
                // ---------
                
                if(in_array("friendlyName", array_keys($ms)) && $ms["friendlyName"] == "Nightfall") {
                    $arr = $api->destiny2()->getDestinyEntityDefinition2("DestinyActivityDefinition", $activityHash)->getResponse()->getBody();
                    $arr = json_decode($arr, true);
                    
                    foreach($arr as $act) {
                        if($act["hash"] == $activityHash) {
                            $display = $display .  "\"NFSP\": \"" . str_replace('"', '\"', $act["displayProperties"]["name"]) . " - " . str_replace('"', '\"', $act["displayProperties"]["description"]) . "\",\n";
                            $display = $display .  "\"ICOB\": \"" . "https://www.bungie.net" . $act["displayProperties"]["icon"] . "\",\n";
                            $display = $display .  "\"MAPI\": \"" . "https://www.bungie.net" . $act["pgcrImage"] . "\",\n";
                        }
                    }
                }
                
                // ------
                // TRIALS
                // ------
                
                if(in_array("friendlyName", array_keys($ms)) && $ms["friendlyName"] == "Trials") {
                    $display = $display .  "\"ICOS\": \"" . "https://www.bungie.net" . $ms['quests'][$questItemHash]["displayProperties"]["icon"] . "\",\n";
                    
                    $acts = array_keys($ms["quests"][$questItemHash]["activities"]);
                    $cah = $ms["quests"][$questItemHash]["activities"][$acts[0]]["conceptualActivityHash"];
                    $arr = $api->destiny2()->getDestinyEntityDefinition2("DestinyActivityDefinition", $cah)->getResponse()->getBody();
                    $arr = json_decode($arr, true);
                    
                    foreach($arr as $act) {
                        if($act["hash"] == $activityHash) {
                            $display = $display .  "\"MAP\": \"" . str_replace('"', '\"', $act["displayProperties"]["name"]) . " - " . str_replace('"', '\"', $act["displayProperties"]["description"]) . "\",\n";
                        }
                    }
                    
                    $arr = $api->destiny2()->getDestinyEntityDefinition2("DestinyActivityModeDefinition", $cah)->getResponse()->getBody();
                    $arr = json_decode($arr, true);
                    foreach($arr as $act) {
                        if($act["hash"] == $activityModeHash) {
                            $display = $display .  "\"MODE\": \"" . str_replace('"', '\"', $act["displayProperties"]["name"]) . " - " . str_replace('"', '\"', $act["displayProperties"]["description"]) . "\",\n";
                        }
                    }
                    
                    $trials_chal = "";
                    foreach($arr as $act) {
                        if($act["hash"] == $cah) {
                            foreach($act["challenges"] as $ch) {
                                $trials_chal = $trials_chal . $ch["objectiveHash"] . " ";
                            }
                        }
                    }
                    
                    $t_arr = explode(" ", trim($trials_chal));
                    
                    $arr = $api->destiny2()->getDestinyEntityDefinition2("DestinyObjectiveDefinition", $activityHash)->getResponse()->getBody();
                    $arr = json_decode($arr, true);
                    foreach($t_arr as $o) {
                        foreach($arr as $ms) {
                            if($ms['hash'] == $o) {
                                $display = $display .  "\"CHAL\": \"" . $ms['displayProperties']["name"] . " - " . $ms['displayProperties']['description'] . "\",\n";
                            }
                        }
                    }
                }
            }
            
            // XUR and WEEKLY CLAN OBJECTIVES
            // Commented out due to being unnecessary
            
//             else if($questItemHash == 0) {
//                 if(in_array("displayProperties", array_keys($ms))) {
//                     $display = $display . "\"NAME\": \"" . $ms['displayProperties']["name"] . "\",\n";
//                     $display = $display .  "\"DESC\": \"" . $ms['displayProperties']["description"] . "\",\n";
//                     if($ms['displayProperties']["hasIcon"])
//                         $display = $display .  "\"ICOS\": \"" . "https://www.bungie.net" . $ms['displayProperties']["icon"] . "\",\n";
//                     $display = $display .  "\"ICOB\": \"" . "https://www.bungie.net" . $ms['image'] . "\",\n";
                        
//                 }
//             }
        }
    }
    
    // Displays any challenges
    if($objectiveHash != "") {
        $o_arr = explode(" ", trim($objectiveHash));
        $arr = $api->destiny2()->getDestinyEntityDefinition2("DestinyObjectiveDefinition", $objectiveHash)->getResponse()->getBody();
        $arr = json_decode($arr, true);
        foreach($o_arr as $o) {
            foreach($arr as $ms) {
                if($ms['hash'] == $o) {
                    $display = $display .  "\"CHAL\": \"" . $ms['displayProperties']["name"] . " - " . $ms['displayProperties']['description'] . "\",\n";
                }
            }
        }
    }
    
    $display = $display . "},\n";
    $file_output = $file_output . $display;
}

// ---
// XUR
// ---

$xur = $api->destiny2()->getXur()->getResponse()->getBody();
$xur = json_decode($xur, true);
if($xur['isLive']) {
    $s = "{\n";
    $s = $s . "\"NAME\": \"" . $xur['name'] . "\",\n";
    $s = $s . "\"DESC\": \"" . "View his wares before he disappears again..." . "\",\n";
    $s = $s . "\"ICOS\": \"" . "https://www.bungie.net/img/destiny_content/milestones/icons/xur.png" . "\",\n";
    $s = $s . "\"ICOB\": \"" . "https://www.bungie.net/img/destiny_content/pgcr/conceptual_xur.jpg" . "\",\n";
    $s = $s . "\"MAP\": \"" . $xur['location']['region'] . ", " . $xur['location']['planet'] . "\",\n";
    $s = $s . "\"XITM\": {\n";
    
    $arr = $api->destiny2()->getDestinyEntityDefinition2("DestinyInventoryItemDefinition", $s)->getResponse()->getBody();
    $arr = json_decode($arr, true);
    
    foreach($xur['itemHashes'] as $item) {
        $s = $s . "{\"NAME\": \"" . $arr[$item]['displayProperties']['name'] . "\", \"DESC\": \"" . $arr[$item]['displayProperties']['description'] . "\"},\n";
    }
    $s = $s . "}\n";
    
    $file_output = $file_output . $s . "},\n";
}



date_default_timezone_set("America/Phoenix");
$file_output = $file_output . "];\n//" . date("i") . "\n";
$file_output = $file_output . "//" . date("m-d-Y h:i:sa");

echo $file_output;
//echo str_replace("\n", "<br>", $file_output);

// Write data to file
$file = fopen("manifest_data.js", "w");
fwrite($file, $file_output);
fclose($file);

?>