window.onresize = function(){ location.reload(); }

var WIN_HEIGHT = window.innerHeight;
var WIN_WIDTH = window.innerWidth;
var WIN_SCALE = Math.min(WIN_HEIGHT / 1080, WIN_WIDTH / 1920);

var svg_dir = d3.select("#director")
				.append("svg")
				.attr("width", window.innerWidth - 4)
				.attr("height", window.innerHeight - 4)
				.attr("id", "d3_director")
				.on("mousemove", function() {
					svg_dir.selectAll("image,text")
						.attr("transform", function() {
							var x_offset = d3.event.pageX * -0.02 + (WIN_WIDTH*0.02/2);
							var y_offset = d3.event.pageY * -0.02 + (WIN_HEIGHT*0.02/2);
							
							
							return "translate(" + x_offset + "," + y_offset + ")"
						});
				})

var div = d3.select("body").append("div")
.attr("class", "tooltip")
.style("display", "none")
.attr("id", "tt");
var tooltip_text = d3.select("#tt").html("<span id=\"tt_text\"></span>");

/*
 * 	+-------------------+
 * 	|		PLANETS		|
 * 	+-------------------+
 */



// SATURN
var d_sa_cx = WIN_SCALE - WIN_SCALE * 150;
var d_sa_cy = WIN_HEIGHT - WIN_SCALE * 890;

var destination_saturn = svg_dir.append("image")
.attr("x", function() { return d_sa_cx; })
.attr("y", function() { return d_sa_cy; })
.attr("width", 900 * WIN_SCALE)
.attr("height", 1080 * WIN_SCALE)
.attr("xlink:href", "img/saturn.png");






// JUPITER
var d_ju_cx = WIN_WIDTH - 900 * WIN_SCALE + 150;
var d_ju_cy = WIN_HEIGHT - 596 * WIN_SCALE + 50;
var d_ju_r = WIN_SCALE;

var destination_jupiter = svg_dir.append("image")
.attr("x", function() { return d_ju_cx; })
.attr("y", function() { return d_ju_cy; })
.attr("width", 900 * WIN_SCALE)
.attr("height", 596 * WIN_SCALE)
.attr("xlink:href", "img/jupiter.png");






// NESSUS ORBIT
var d_no_cx = WIN_WIDTH - WIN_SCALE * 858;
var d_no_cy = WIN_HEIGHT/2 - WIN_SCALE * 524;
var d_no_r = WIN_SCALE * 200;

var destination_nessusorbit = svg_dir.append("image")
.attr("x", function() { return d_no_cx; })
.attr("y", function() { return d_no_cy; })
.attr("width", 768 * WIN_SCALE)
.attr("height", 512 * WIN_SCALE)
.attr("opacity", 0.8)
.attr("xlink:href", "img/levi.png");






//LEVIATHAN
var destination_nessusorbit = svg_dir.append("image")
.attr("x", function() { return d_no_cx + 658/2 * WIN_SCALE; })
.attr("y", function() { return d_no_cy + 433/4 * WIN_SCALE; })
.attr("width", 120 * WIN_SCALE)
.attr("height", 96 * WIN_SCALE)
.attr("opacity", 0.8)
.attr("xlink:href", "img/levi_planet.png")
.on("mouseover", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 1);
	
	d3.select("#text-leviathan").transition().duration(200)
	.attr("fill", "white");
	
	tooltip_info("Leviathan");
	
	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 0.8);
	d3.select("#text-leviathan").transition().duration(200)
	.attr("fill", "lightgray");
	
	div.style("display", "none");
});


var text_leviathan = svg_dir.append("text")
.attr("x", d_no_cx + 990/2 * WIN_SCALE)
.attr("y", d_no_cy + 573/4 * WIN_SCALE)
.text("NESSUS ORBIT")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "lightgray")
.attr("id", "text-leviathan");






// THE TRAVELER
var d_tr_cx = WIN_WIDTH/2;
var d_tr_cy = WIN_HEIGHT/2;
var d_tr_r = WIN_SCALE * 80;

var destination_traveler_bg = svg_dir.append("image")
.attr("x", function() { return d_tr_cx - (480/2 * WIN_SCALE); })
.attr("y", function() { return d_tr_cy - (480/2 * WIN_SCALE); })
.attr("width", function() { return 480 * WIN_SCALE; })
.attr("height", function() { return 480 * WIN_SCALE; })
.attr("opacity", 0.8)
.attr("xlink:href", "img/traveler.png");


var destination_traveler = svg_dir.append("image")
.attr("x", function() { return d_tr_cx - (146/2 * WIN_SCALE); })
.attr("y", function() { return d_tr_cy - (146/2 * WIN_SCALE); })
.attr("width", function() { return 146 * WIN_SCALE; })
.attr("height", function() { return 146 * WIN_SCALE; })
.attr("opacity", 0.8)
.attr("xlink:href", "img/traveler_planet.png")
.on("mouseover", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 1);
	
	d3.select("#text-traveler").transition().duration(200)
	.attr("fill", "white");
	
	tooltip_flag = 1;
	tooltip_info("The Traveler");
	
	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 0.8);
	d3.select("#text-traveler").transition().duration(200)
	.attr("fill", "lightgray");
	
	tooltip_flag = 0;
	div.style("display", "none");
});


var text_traveler = svg_dir.append("text")
.attr("x", d_tr_cx + d_tr_r * 1.5)
.attr("y", d_tr_cy)
.text("THE TRAVELER")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "lightgray")
.attr("id", "text-traveler");






// EARTH
var d_ea_cx = WIN_WIDTH/2 - (314/2 * WIN_SCALE);
var d_ea_cy = WIN_HEIGHT - WIN_SCALE * 314/2 - WIN_SCALE * 190	;
var d_ea_r = WIN_SCALE * 170;

var destination_earth = svg_dir.append("image")
.attr("x", function() { return d_ea_cx; })
.attr("y", function() { return d_ea_cy; })
.attr("xlink:href", "img/earth.png")
.attr("width", 314 * WIN_SCALE)
.attr("height", 314 * WIN_SCALE)
.attr("opacity", 0.8)
.on("mouseover", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#text-earth").transition().duration(200)
	.attr("fill", "white");
	
	tooltip_flag = 1;
	tooltip_info("Earth");
	
	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 0.8);
	d3.select("#text-earth").transition().duration(200)
	.attr("fill", "lightgray");

	tooltip_flag = 0;
	div.style("display", "none");
});


var text_earth = svg_dir.append("text")
.attr("x", d_ea_cx + WIN_SCALE * 385)
.attr("y", d_ea_cy + WIN_SCALE * 120)
.text("EARTH")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "lightgray")
.attr("id", "text-earth");






// MERCURY
var d_me_cx = WIN_WIDTH/2  - (348/2 * WIN_SCALE);
var d_me_cy = WIN_SCALE * 230  - (349/2 * WIN_SCALE);
var d_me_r = WIN_SCALE * 60;

var destination_mercury = svg_dir.append("image")
.attr("x", function() { return d_me_cx; })
.attr("y", function() { return d_me_cy; })
.attr("xlink:href", "img/mercury.png")
.attr("width", 348 * WIN_SCALE)
.attr("height", 349 * WIN_SCALE)
.attr("opacity", 0.8);

var d_me2_cx = WIN_WIDTH/2  - (130/2 * WIN_SCALE);
var d_me2_cy = WIN_SCALE * 230  - (172/2 * WIN_SCALE);


var destination_mercury = svg_dir.append("image")
.attr("x", function() { return d_me2_cx; })
.attr("y", function() { return d_me2_cy; })
.attr("xlink:href", "img/mercury_planet.png")
.attr("width", 124 * WIN_SCALE)
.attr("height", 161 * WIN_SCALE)
.attr("opacity", 0.8)
.on("mouseover", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#text-mercury").transition().duration(200)
	.attr("fill", "white");
	
	tooltip_flag = 1;
	tooltip_info("Mercury");
	
	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 0.8);
	d3.select("#text-mercury").transition().duration(200)
	.attr("fill", "lightgray");

	tooltip_flag = 0;
	div.style("display", "none");
});


var text_mercury = svg_dir.append("text")
.attr("x", d_me2_cx*1.18)
.attr("y", d_me2_cy*1.69)
.text("MERCURY")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "lightgray")
.attr("id", "text-mercury");






// MARS
var d_ma_cx = WIN_SCALE * 224;
var d_ma_cy = WIN_HEIGHT/2 - WIN_SCALE * 310/2;
var d_ma_r = WIN_SCALE * 120;

var destination_mars = svg_dir.append("image")
.attr("x", function() { return d_ma_cx; })
.attr("y", function() { return d_ma_cy; })
.attr("xlink:href", "img/mars.png")
.attr("width", 224 * WIN_SCALE)
.attr("height", 224 * WIN_SCALE)
.attr("opacity", 0.8);


var text_mars = svg_dir.append("text")
.attr("x", d_ma_cx*2 + WIN_SCALE * 80)
.attr("y", d_ma_cy*1.5 - WIN_SCALE * 80)
.text("MARS")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "lightgray")
.attr("id", "text-mars");




// TITAN
var d_ti_cx = WIN_SCALE * 450;
var d_ti_cy = WIN_HEIGHT - WIN_SCALE * 200;
var d_ti_r = WIN_SCALE * 70;

var destination_titan = svg_dir.append("circle")
.attr("cx", function() { return d_ti_cx; })
.attr("cy", function() { return d_ti_cy; })
.attr("r", function() { return d_ti_r; })
.attr("fill", function() { return "blue"; });






// IO
var d_io_cx = WIN_WIDTH - WIN_SCALE * 400;
var d_io_cy = WIN_HEIGHT - WIN_SCALE * 300;
var d_io_r = WIN_SCALE * 110;

var destination_io = svg_dir.append("circle")
.attr("cx", function() { return d_io_cx; })
.attr("cy", function() { return d_io_cy; })
.attr("r", function() { return d_io_r; })
.attr("fill", function() { return "yellow"; });






// NESSUS
var d_ne_cx = WIN_WIDTH - WIN_SCALE * 600;
var d_ne_cy = WIN_SCALE * 350;
var d_ne_r = WIN_SCALE * 90;

var destination_nessus = svg_dir.append("circle")
.attr("cx", function() { return d_ne_cx; })
.attr("cy", function() { return d_ne_cy; })
.attr("r", function() { return d_ne_r; })
.attr("fill", function() { return "teal"; });






// CRUCIBLE
var d_cr_cx = WIN_SCALE * 630;
var d_cr_cy = WIN_SCALE * 260;
var d_cr_r = WIN_SCALE * 60;

var destination_crucible = svg_dir.append("circle")
.attr("cx", function() { return d_cr_cx; })
.attr("cy", function() { return d_cr_cy; })
.attr("r", function() { return d_cr_r; })
.attr("fill", function() { return "darkred"; });






// STRIKES
var d_st_cx = WIN_SCALE * 460;
var d_st_cy = WIN_SCALE * 120;
var d_st_r = WIN_SCALE * 50;

var destination_strikes = svg_dir.append("circle")
.attr("cx", function() { return d_st_cx; })
.attr("cy", function() { return d_st_cy; })
.attr("r", function() { return d_st_r; })
.attr("fill", function() { return "darkblue"; });




/*
 * 	+-----------------------+
 * 	|		FUNCTIONS		|
 * 	+-----------------------+
 */


function tooltip_display() {
	  div
      .style("left", function() {
    	  var x_coor = d3.event.pageX;
    	  var width = div.node().getBoundingClientRect().width;
    	  console.log(width);
    	  
    	  if(width + x_coor < WIN_WIDTH - 50) {
    		  return (d3.event.pageX + 15) + "px";
    	  }
    	  else {
    		  return (d3.event.pageX - width) + "px";
    	  }
      })
      .style("top", function() { 
    	  var y_coor = d3.event.pageY;
    	  var height = div.node().getBoundingClientRect().height;
    	  
    	  if(height + y_coor < WIN_HEIGHT - 50) {
    		  return (d3.event.pageY + 20) + "px";
    	  }
    	  else {
    		  return (d3.event.pageY - height + 20) + "px";
    	  }
      });
}

function tooltip_info(planet) {
	var title = "<h2>NIGHTFALL: THE PYRAMIDION</h2>";
	var descriptor = "<h3>" + planet + "</h3>";
	
	var icon_div = "<div class=\"icon_header\">" + "</div>";
	var header_div = "<div class=\"box_header\">" + title + descriptor + "</div>"
	
	var header = "<h4>The Crucible</h4>";
	var description = "\"We have no Tower and no City to support us. But we can always" +
			"drill Control. Welcome back to the Crucible, Guardians.\" - Shaxx" +
			"This Beta playlist is a subset of the full Quickplay offering and contains the Control" +
			"match type on the Endless Vale map." +
			"<br> - 4v4 Low Intensity" +
			"<br> - Firetime: 1-4 Players" +
			"<br> - Xbox Live Required" +
			"<br> - Level Advantages Disabled"
	
	var str = icon_div + header_div + header + description;
	
	d3.select("#tt_text")
	.html(str);
}
