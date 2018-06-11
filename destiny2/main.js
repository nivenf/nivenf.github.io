window.onresize = function(){ location.reload(); }

var WIN_HEIGHT = window.innerHeight;
var WIN_WIDTH = window.innerWidth;
var WIN_SCALE = Math.min(WIN_HEIGHT / 1080, WIN_WIDTH / 1920);

// -------
// TOOLTIP
// -------


var div = d3.select("body").append("div")
.attr("class", "tooltip")
.style("display", "none")
.attr("id", "tt");
var tooltip_text = d3.select("#tt").html("<span id=\"tt_text\"></span>");


// --------
// PARALLAX
// --------

var svg_dir = d3.select("#director")
				.append("svg")
				.attr("width", window.innerWidth - 4)
				.attr("height", window.innerHeight - 4)
				.attr("id", "d3_director")
				.on("mousemove", function() {
					
					// BACKGROUND CIRCLES should be same speed as strikes
					svg_dir.select("#GROUP_STRIKES")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.003 + (WIN_WIDTH*0.003/2);
						var y_offset = d3.event.pageY * -0.003 + (WIN_HEIGHT*0.003/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_OVERLAY")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.003 + (WIN_WIDTH*0.003/2);
						var y_offset = d3.event.pageY * -0.003 + (WIN_HEIGHT*0.003/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_LEVIATHAN")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.005 + (WIN_WIDTH*0.005/2);
						var y_offset = d3.event.pageY * -0.005 + (WIN_HEIGHT*0.005/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					svg_dir.select("#GROUP_RAIDHB")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.005 + (WIN_WIDTH*0.005/2);
						var y_offset = d3.event.pageY * -0.005 + (WIN_HEIGHT*0.005/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_MERCURY")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.007 + (WIN_WIDTH*0.007/2);
						var y_offset = d3.event.pageY * -0.007 + (WIN_HEIGHT*0.007/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_CRUCIBLE")
						.attr("transform", function() {
							var x_offset = d3.event.pageX * -0.007 + (WIN_WIDTH*0.007/2);
							var y_offset = d3.event.pageY * -0.007 + (WIN_HEIGHT*0.007/2);
							return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_MARS")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.012 + (WIN_WIDTH*0.012/2);
						var y_offset = d3.event.pageY * -0.012 + (WIN_HEIGHT*0.012/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_NESSUS")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.015 + (WIN_WIDTH*0.015/2);
						var y_offset = d3.event.pageY * -0.015 + (WIN_HEIGHT*0.015/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_TRAVELER")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.02 + (WIN_WIDTH*0.02/2);
						var y_offset = d3.event.pageY * -0.02 + (WIN_HEIGHT*0.02/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_SATURN")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.02 + (WIN_WIDTH*0.02/2);
						var y_offset = d3.event.pageY * -0.02 + (WIN_HEIGHT*0.02/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_TITAN")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.035 + (WIN_WIDTH*0.035/2);
						var y_offset = d3.event.pageY * -0.035 + (WIN_HEIGHT*0.035/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
			
					svg_dir.select("#GROUP_EARTH")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.027 + (WIN_WIDTH*0.027/2);
						var y_offset = d3.event.pageY * -0.027 + (WIN_HEIGHT*0.027/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_JUPITER")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.017 + (WIN_WIDTH*0.017/2);
						var y_offset = d3.event.pageY * -0.017 + (WIN_HEIGHT*0.017/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
					svg_dir.select("#GROUP_IO")
					.attr("transform", function() {
						var x_offset = d3.event.pageX * -0.031 + (WIN_WIDTH*0.031/2);
						var y_offset = d3.event.pageY * -0.031 + (WIN_HEIGHT*0.031/2);
						return "translate(" + x_offset + "," + y_offset + ")";
					});
			
				})


/*
 * 	+-------------------+
 * 	|		PLANETS		|
 * 	+-------------------+
 */

//			OVERLAY
				
var GROUP_OVERLAY = svg_dir.append("g").attr("id", "GROUP_OVERLAY");

var destination_overlay = GROUP_OVERLAY.append("image")
.attr("x", function() { return -(2136 * WIN_SCALE - WIN_WIDTH)/2; })
.attr("y", function() { return -(2136 * WIN_SCALE - WIN_HEIGHT)/2; })
.attr("width", 2136 * WIN_SCALE)
.attr("height", 2136 * WIN_SCALE)
.attr("xlink:href", "img/overlay.png");






// 			SATURN
				
var GROUP_SATURN = svg_dir.append("g").attr("id", "GROUP_SATURN");

var d_sa_cx = WIN_SCALE - WIN_SCALE * 150;
var d_sa_cy = WIN_HEIGHT - WIN_SCALE * 890;

var destination_saturn = GROUP_SATURN.append("image")
.attr("x", function() { return d_sa_cx; })
.attr("y", function() { return d_sa_cy; })
.attr("width", 900 * WIN_SCALE)
.attr("height", 1080 * WIN_SCALE)
.attr("xlink:href", "img/saturn.png");






// 			JUPITER

var GROUP_JUPITER = svg_dir.append("g").attr("id", "GROUP_JUPITER");

var d_ju_cx = WIN_WIDTH - 900 * WIN_SCALE + 150;
var d_ju_cy = WIN_HEIGHT - 596 * WIN_SCALE + 50;
var d_ju_r = WIN_SCALE;

var destination_jupiter = GROUP_JUPITER.append("image")
.attr("x", function() { return d_ju_cx; })
.attr("y", function() { return d_ju_cy; })
.attr("width", 900 * WIN_SCALE)
.attr("height", 596 * WIN_SCALE)
.attr("xlink:href", "img/jupiter.png");







//			LEVIATHAN

var GROUP_LEVIATHAN = svg_dir.append("g").attr("id", "GROUP_LEVIATHAN");

var d_no_cx = WIN_WIDTH - WIN_SCALE * 858;
var d_no_cy = WIN_HEIGHT/2 - WIN_SCALE * 524;

var destination_nessusorbit = GROUP_LEVIATHAN.append("image")
.attr("x", function() { return d_no_cx; })
.attr("y", function() { return d_no_cy; })
.attr("width", 768 * WIN_SCALE)
.attr("height", 512 * WIN_SCALE)
.attr("xlink:href", "img/leviathan/leviathan.PNG");

var destination_leviathan_border = GROUP_LEVIATHAN.append("image")
.attr("x", function() { return d_no_cx + (610/2 * WIN_SCALE); })
.attr("y", function() { return d_no_cy + (115/2 * WIN_SCALE); })
.attr("width", function() { return 160 * WIN_SCALE; })
.attr("height", function() { return 160 * WIN_SCALE; })
.attr("opacity", 0.4)
.attr("id", "border-leviathan1")
.attr("xlink:href", "img/leviathan/border1.PNG")
.attr("class","io_rot")
.attr("transform-origin", function() {
	var x = d_no_cx + (610/2 * WIN_SCALE) + (160/2*WIN_SCALE);
	var y = d_no_cy + (115/2 * WIN_SCALE) + (160/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var destination_leviathan_border = GROUP_LEVIATHAN.append("image")
.attr("x", function() { return d_no_cx + (610/2 * WIN_SCALE); })
.attr("y", function() { return d_no_cy + (115/2 * WIN_SCALE); })
.attr("width", function() { return 160 * WIN_SCALE; })
.attr("height", function() { return 160 * WIN_SCALE; })
.attr("opacity", 0.4)
.attr("id", "border-leviathan2")
.attr("xlink:href", "img/leviathan/border2.PNG")
.attr("class","mars_rot")
.attr("transform-origin", function() {
	var x = d_no_cx + (610/2 * WIN_SCALE) + (160/2*WIN_SCALE);
	var y = d_no_cy + (115/2 * WIN_SCALE) + (160/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var text_leviathan = GROUP_LEVIATHAN.append("text")
.attr("x", d_no_cx + 990/2 * WIN_SCALE)
.attr("y", d_no_cy + 573/4 * WIN_SCALE)
.text("NESSUS ORBIT")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "DarkGray")
.attr("id", "text-leviathan");







// 			EARTH

var GROUP_EARTH = svg_dir.append("g").attr("id", "GROUP_EARTH");

var d_ea_cx = WIN_WIDTH/2 - (314/2 * WIN_SCALE);
var d_ea_cy = WIN_HEIGHT - WIN_SCALE * 314/2 - WIN_SCALE * 190	;

var destination_earth_bg = GROUP_EARTH.append("image")
.attr("x", function() { return d_ea_cx - 320 * WIN_SCALE; })
.attr("y", function() { return d_ea_cy - 270 * WIN_SCALE; })
.attr("xlink:href", "img/earth/background.PNG")
.attr("width", 960 * WIN_SCALE)
.attr("height", 800 * WIN_SCALE);

var destination_earth_border = GROUP_EARTH.append("image")
.attr("x", function() { return d_ea_cx - 163 * WIN_SCALE; })
.attr("y", function() { return d_ea_cy - 163 * WIN_SCALE; })
.attr("xlink:href", "img/earth/border.PNG")
.attr("width", 640 * WIN_SCALE)
.attr("height", 640 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-earth")
.attr("class","nessus_rot2")
.attr("transform-origin", function() {
	var x = d_ea_cx - 163 * WIN_SCALE + (640/2*WIN_SCALE);
	var y = d_ea_cy - 163 * WIN_SCALE + (640/2*WIN_SCALE);
	return x + "px " + y + "px";
});


var destination_earth = GROUP_EARTH.append("image")
.attr("x", function() { return d_ea_cx; })
.attr("y", function() { return d_ea_cy; })
.attr("xlink:href", "img/earth/earth.png")
.attr("width", 314 * WIN_SCALE)
.attr("height", 314 * WIN_SCALE)
.on("mouseover", function() {
	d3.select("#border-earth").transition().duration(200)
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
	d3.select("#border-earth").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#text-earth").transition().duration(200)
	.attr("fill", "DarkGray");

	tooltip_flag = 0;
	div.style("display", "none");
});


var text_earth = GROUP_EARTH.append("text")
.attr("x", d_ea_cx + WIN_SCALE * 385)
.attr("y", d_ea_cy + WIN_SCALE * 120)
.text("EARTH")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "DarkGray")
.attr("id", "text-earth");






// 			MERCURY

var GROUP_MERCURY = svg_dir.append("g").attr("id", "GROUP_MERCURY");

var d_me_cx = WIN_WIDTH/2  - (348/2 * WIN_SCALE);
var d_me_cy = WIN_SCALE * 230  - (349/2 * WIN_SCALE);

var destination_mercury_border = GROUP_MERCURY.append("image")
.attr("x", function() { return d_me_cx + 75 * WIN_SCALE; })
.attr("y", function() { return d_me_cy + 100 * WIN_SCALE; })
.attr("xlink:href", "img/mercury/border1.PNG")
.attr("width", 201 * WIN_SCALE)
.attr("height", 200 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-me1")
.attr("class","nessus_rot2")
.attr("transform-origin", function() {
	var x = d_me_cx + 75 * WIN_SCALE + (201/2*WIN_SCALE);
	var y = d_me_cy + 100 * WIN_SCALE + (200/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var destination_mercury_border = GROUP_MERCURY.append("image")
.attr("x", function() { return d_me_cx + 75 * WIN_SCALE; })
.attr("y", function() { return d_me_cy + 100 * WIN_SCALE; })
.attr("xlink:href", "img/mercury/border2.PNG")
.attr("width", 201 * WIN_SCALE)
.attr("height", 200 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-me2")
.attr("class","nessus_rot")
.attr("transform-origin", function() {
	var x = d_me_cx + 75 * WIN_SCALE + (201/2*WIN_SCALE);
	var y = d_me_cy + 100 * WIN_SCALE + (200/2*WIN_SCALE);
	return x + "px " + y + "px";
});



var destination_mercury = GROUP_MERCURY.append("image")
.attr("x", function() { return d_me_cx; })
.attr("y", function() { return d_me_cy; })
.attr("xlink:href", "img/mercury/mercury.png")
.attr("width", 348 * WIN_SCALE)
.attr("height", 349 * WIN_SCALE);

var d_me2_cx = WIN_WIDTH/2  - (130/2 * WIN_SCALE);
var d_me2_cy = WIN_SCALE * 230  - (172/2 * WIN_SCALE);


var destination_mercury = GROUP_MERCURY.append("image")
.attr("x", function() { return d_me2_cx; })
.attr("y", function() { return d_me2_cy; })
.attr("xlink:href", "img/mercury/mercury_planet.png")
.attr("width", 124 * WIN_SCALE)
.attr("height", 161 * WIN_SCALE)
.on("mouseover", function() {
	d3.select("#border-me1").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#border-me2").transition().duration(200)
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
	d3.select("#border-me1").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#border-me2").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#text-mercury").transition().duration(200)
	.attr("fill", "DarkGray");

	tooltip_flag = 0;
	div.style("display", "none");
});


var text_mercury = GROUP_MERCURY.append("text")
.attr("x", d_me2_cx*1.18)
.attr("y", d_me2_cy*1.69)
.text("MERCURY")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "DarkGray")
.attr("id", "text-mercury");






// 			MARS

var GROUP_MARS = svg_dir.append("g").attr("id", "GROUP_MARS");

var d_ma_cx = WIN_SCALE * 224;
var d_ma_cy = WIN_HEIGHT/2 - WIN_SCALE * 310/2;

var destination_mars_bg = GROUP_MARS.append("image")
.attr("x", function() { return d_ma_cx - 144 * WIN_SCALE; })
.attr("y", function() { return d_ma_cy - 144 * WIN_SCALE; })
.attr("xlink:href", "img/mars/background.png")
.attr("width", 512 * WIN_SCALE)
.attr("height", 512 * WIN_SCALE);

var destination_mars_border = GROUP_MARS.append("image")
.attr("x", function() { return d_ma_cx - 68.5 * WIN_SCALE; })
.attr("y", function() { return d_ma_cy - 68.5 * WIN_SCALE; })
.attr("xlink:href", "img/mars/border1.png")
.attr("width", 361 * WIN_SCALE)
.attr("height", 361 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-ma1")
.attr("class","nessus_rot2")
.attr("transform-origin", function() {
	var x = d_ma_cx - 68.5 * WIN_SCALE + (361/2*WIN_SCALE);
	var y = d_ma_cy - 68.5 * WIN_SCALE + (361/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var destination_mars_border = GROUP_MARS.append("image")
.attr("x", function() { return d_ma_cx - 68 * WIN_SCALE; })
.attr("y", function() { return d_ma_cy - 68 * WIN_SCALE; })
.attr("xlink:href", "img/mars/border2.png")
.attr("width", 360 * WIN_SCALE)
.attr("height", 360 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-ma2")
.attr("class","mars_rot")
.attr("transform-origin", function() {
	var x = d_ma_cx - 68.5 * WIN_SCALE + (361/2*WIN_SCALE);
	var y = d_ma_cy - 68.5 * WIN_SCALE + (361/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var destination_mars = GROUP_MARS.append("image")
.attr("x", function() { return d_ma_cx; })
.attr("y", function() { return d_ma_cy; })
.attr("xlink:href", "img/mars/mars.png")
.attr("width", 224 * WIN_SCALE)
.attr("height", 224 * WIN_SCALE)
.on("mouseover", function() {
	d3.select("#border-ma1").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#border-ma2").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#text-mars").transition().duration(200)
	.attr("fill", "white");
	
	tooltip_flag = 1;
	tooltip_info("Mars");
	
	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select("#border-ma1").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#border-ma2").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#text-mars").transition().duration(200)
	.attr("fill", "DarkGray");

	tooltip_flag = 0;
	div.style("display", "none");
});


var text_mars = GROUP_MARS.append("text")
.attr("x", d_ma_cx*2 + WIN_SCALE * 85)
.attr("y", d_ma_cy + WIN_SCALE * 110)
.text("MARS")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "DarkGray")
.attr("id", "text-mars");






// 			TITAN

var GROUP_TITAN = svg_dir.append("g").attr("id", "GROUP_TITAN");

var d_ti_cx = WIN_SCALE * 450 - WIN_SCALE * 169/2;
var d_ti_cy = WIN_HEIGHT - WIN_SCALE * 156*2;

var destination_titan_border = GROUP_TITAN.append("image")
.attr("x", function() { return d_ti_cx - 99 * WIN_SCALE; })
.attr("y", function() { return d_ti_cy - 99 * WIN_SCALE; })
.attr("xlink:href", "img/titan/border1.png")
.attr("width", 360 * WIN_SCALE)
.attr("height", 360 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-ti1")
.attr("class","nessus_rot")
.attr("transform-origin", function() {
	var x = d_ti_cx - 99 * WIN_SCALE + (360/2*WIN_SCALE);
	var y = d_ti_cy - 99 * WIN_SCALE + (360/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var destination_titan_border = GROUP_TITAN.append("image")
.attr("x", function() { return d_ti_cx - 99 * WIN_SCALE; })
.attr("y", function() { return d_ti_cy - 99 * WIN_SCALE; })
.attr("xlink:href", "img/titan/border2.png")
.attr("width", 360 * WIN_SCALE)
.attr("height", 360 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-ti2")
.attr("class","io_rot")
.attr("transform-origin", function() {
	var x = d_ti_cx - 99 * WIN_SCALE + (360/2*WIN_SCALE);
	var y = d_ti_cy - 99 * WIN_SCALE + (360/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var destination_titan = GROUP_TITAN.append("image")
.attr("x", function() { return d_ti_cx; })
.attr("y", function() { return d_ti_cy; })
.attr("xlink:href", "img/titan/titan.png")
.attr("width", 162 * WIN_SCALE)
.attr("height", 161 * WIN_SCALE)
.on("mouseover", function() {
	d3.select("#border-ti1").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#border-ti2").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#text-titan").transition().duration(200)
	.attr("fill", "white");
	
	tooltip_flag = 1;
	tooltip_info("Titan");
	
	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select("#border-ti1").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#border-ti2").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#text-titan").transition().duration(200)
	.attr("fill", "DarkGray");

	tooltip_flag = 0;
	div.style("display", "none");
});


var text_titan = GROUP_TITAN.append("text")
.attr("x", d_ti_cx + WIN_SCALE * 250)
.attr("y", d_ti_cy + WIN_SCALE * 100)
.text("TITAN")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "DarkGray")
.attr("id", "text-titan");






// 			IO

var GROUP_IO = svg_dir.append("g").attr("id", "GROUP_IO");

var d_io_cx = WIN_WIDTH - WIN_SCALE * 250*2;
var d_io_cy = WIN_HEIGHT - WIN_SCALE * 200*2;

var destination_io_border = GROUP_IO.append("image")
.attr("x", function() { return d_io_cx - 53 * WIN_SCALE; })
.attr("y", function() { return d_io_cy - 53 * WIN_SCALE; })
.attr("xlink:href", "img/io/border1.PNG")
.attr("width", 320 * WIN_SCALE)
.attr("height", 320 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-io1")
.attr("class","nessus_rot")
.attr("transform-origin", function() {
	var x = d_io_cx - 53 * WIN_SCALE + (320/2*WIN_SCALE);
	var y = d_io_cy - 53 * WIN_SCALE + (320/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var destination_io_border = GROUP_IO.append("image")
.attr("x", function() { return d_io_cx - 53 * WIN_SCALE; })
.attr("y", function() { return d_io_cy - 53 * WIN_SCALE; })
.attr("xlink:href", "img/io/border2.PNG")
.attr("width", 320 * WIN_SCALE)
.attr("height", 320 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-io2")
.attr("class","io_rot")
.attr("transform-origin", function() {
	var x = d_io_cx - 53 * WIN_SCALE + (320/2*WIN_SCALE);
	var y = d_io_cy - 53 * WIN_SCALE + (320/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var destination_io = GROUP_IO.append("image")
.attr("x", function() { return d_io_cx; })
.attr("y", function() { return d_io_cy; })
.attr("xlink:href", "img/io/io.png")
.attr("width", 214 * WIN_SCALE)
.attr("height", 214 * WIN_SCALE)
.on("mouseover", function() {
	d3.select("#border-io1").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#border-io2").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#text-io").transition().duration(200)
	.attr("fill", "white");
	
	tooltip_flag = 1;
	tooltip_info("Io");
	
	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select("#border-io1").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#border-io2").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#text-io").transition().duration(200)
	.attr("fill", "DarkGray");

	tooltip_flag = 0;
	div.style("display", "none");
});


var text_io = GROUP_IO.append("text")
.attr("x", d_io_cx + WIN_SCALE * 250 + 40 * WIN_SCALE)
.attr("y", d_io_cy + WIN_SCALE * 100)
.text("IO")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "DarkGray")
.attr("id", "text-io");






// 			NESSUS

var GROUP_NESSUS = svg_dir.append("g").attr("id", "GROUP_NESSUS");

var destination_nessus_bg = GROUP_NESSUS.append("image")
.attr("x", function() { return d_no_cx - 11 * WIN_SCALE; })
.attr("y", function() { return d_no_cy + 91 * WIN_SCALE; })
.attr("xlink:href", "img/nessus/background.PNG")
.attr("width", 512 * WIN_SCALE)
.attr("height", 512 * WIN_SCALE);

var destination_nessus_border = GROUP_NESSUS.append("image")
.attr("x", function() { return d_no_cx + 61 * WIN_SCALE; })
.attr("y", function() { return d_no_cy + 163 * WIN_SCALE; })
.attr("xlink:href", "img/nessus/border1.PNG")
.attr("width", 360 * WIN_SCALE)
.attr("height", 360 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-nessus1")
.attr("class","nessus_rot")
.attr("transform-origin", function() {
	var x = d_no_cx + 61 * WIN_SCALE + (360/2*WIN_SCALE);
	var y = d_no_cy + 163 * WIN_SCALE + (360/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var destination_nessus_border = GROUP_NESSUS.append("image")
.attr("x", function() { return d_no_cx + 61 * WIN_SCALE; })
.attr("y", function() { return d_no_cy + 163 * WIN_SCALE; })
.attr("xlink:href", "img/nessus/border2.png")
.attr("width", 360 * WIN_SCALE)
.attr("height", 360 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-nessus2")
.attr("class","nessus_rot2")
.attr("transform-origin", function() {
	var x = d_no_cx + 61 * WIN_SCALE + (360/2*WIN_SCALE);
	var y = d_no_cy + 163 * WIN_SCALE + (360/2*WIN_SCALE);
	return x + "px " + y + "px";
});

var destination_nessus = GROUP_NESSUS.append("image")
.attr("x", function() { return d_no_cx + 160 * WIN_SCALE; })
.attr("y", function() { return d_no_cy + 260 * WIN_SCALE; })
.attr("xlink:href", "img/nessus/nessus.png")
.attr("width", 164 * WIN_SCALE)
.attr("height", 164 * WIN_SCALE)
.on("mouseover", function() {
	d3.select("#border-nessus1").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#border-nessus2").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#text-nessus").transition().duration(200)
	.attr("fill", "white");
	
	tooltip_flag = 1;
	tooltip_info("Nessus");
	
	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select("#border-nessus1").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#border-nessus2").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#text-nessus").transition().duration(200)
	.attr("fill", "DarkGray");

	tooltip_flag = 0;
	div.style("display", "none");
});


var text_nessus = GROUP_NESSUS.append("text")
.attr("x", d_no_cx + WIN_SCALE * 410)
.attr("y", d_no_cy + WIN_SCALE * 355)
.text("NESSUS")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "DarkGray")
.attr("id", "text-nessus");







// 			CRUCIBLE

var GROUP_CRUCIBLE = svg_dir.append("g").attr("id", "GROUP_CRUCIBLE");

var d_cr_cx = WIN_SCALE * 580;
var d_cr_cy = WIN_SCALE * 220;

var destination_crucible_bg = GROUP_CRUCIBLE.append("image")
.attr("x", function() { return d_cr_cx; })
.attr("y", function() { return d_cr_cy; })
.attr("xlink:href", "img/crucible/background.PNG")
.attr("width", 104 * WIN_SCALE)
.attr("height", 105 * WIN_SCALE);

var destination_crucible_border = GROUP_CRUCIBLE.append("image")
.attr("x", function() { return d_cr_cx - 18 * WIN_SCALE; })
.attr("y", function() { return d_cr_cy - 17 * WIN_SCALE; })
.attr("xlink:href", "img/crucible/border.PNG")
.attr("width", 140 * WIN_SCALE)
.attr("height", 140 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("class","crucible_rot")
.attr("transform-origin", function() {
	var x = d_cr_cx + (104/2*WIN_SCALE);
	var y = d_cr_cy + (105/2*WIN_SCALE);
	return x + "px " + y + "px";
})
.attr("id", "border-crucible");

var destination_crucible = GROUP_CRUCIBLE.append("image")
.attr("x", function() { return d_cr_cx + 6.5 * WIN_SCALE; })
.attr("y", function() { return d_cr_cy + 6 * WIN_SCALE; })
.attr("xlink:href", "img/crucible/crucible.PNG")
.attr("width", 90 * WIN_SCALE)
.attr("height", 90 * WIN_SCALE)
.attr("opacity", 0.6)
.on("mouseover", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#border-crucible").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#text-crucible").transition().duration(200)
	.attr("fill", "white");
	
	tooltip_flag = 1;
	tooltip_info("Crucible");
	
	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 0.6);
	d3.select("#border-crucible").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#text-crucible").transition().duration(200)
	.attr("fill", "DarkGray");

	tooltip_flag = 0;
	div.style("display", "none");
});


var text_crucible = GROUP_CRUCIBLE.append("text")
.attr("x", d_cr_cx + WIN_SCALE * 150)
.attr("y", d_cr_cy + WIN_SCALE * 90)
.text("CRUCIBLE")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "DarkGray")
.attr("id", "text-crucible");






// 			STRIKES

var GROUP_STRIKES = svg_dir.append("g").attr("id", "GROUP_STRIKES");

var d_st_cx = WIN_SCALE * 460 - 25 * WIN_SCALE;
var d_st_cy = WIN_SCALE * 120 - 15 * WIN_SCALE;

var destination_strikes_border = GROUP_STRIKES.append("image")
.attr("x", function() { return d_st_cx - 22.5 * WIN_SCALE; })
.attr("y", function() { return d_st_cy - 24 * WIN_SCALE; })
.attr("xlink:href", "img/strikes/border.PNG")
.attr("width", 98 * WIN_SCALE)
.attr("height", 110 * WIN_SCALE)
.attr("opacity", 0.4)
.attr("id", "border-strikes")
.attr("class","strikes_rot")
.attr("transform-origin", function() {
	var x = d_st_cx - 22.5 * WIN_SCALE + (98/2*WIN_SCALE);
	var y = d_st_cy - 24 * WIN_SCALE + (110/2*WIN_SCALE);
	return x + "px " + y + "px";
})
.attr("id", "border-crucible");

var destination_strikes_bg = GROUP_STRIKES.append("image")
.attr("x", function() { return d_st_cx - 38 * WIN_SCALE; })
.attr("y", function() { return d_st_cy - 32 * WIN_SCALE; })
.attr("xlink:href", "img/strikes/background.PNG")
.attr("width", 128 * WIN_SCALE)
.attr("height", 128 * WIN_SCALE)
.attr("opacity", 1);

var destination_strikes = GROUP_STRIKES.append("image")
.attr("x", function() { return d_st_cx; })
.attr("y", function() { return d_st_cy; })
.attr("xlink:href", "img/strikes/strikes.PNG")
.attr("width", 52 * WIN_SCALE)
.attr("height", 64 * WIN_SCALE)
.attr("opacity", 0.6)
.on("mouseover", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#border-strikes").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#text-strikes").transition().duration(200)
	.attr("fill", "white");
	
	tooltip_flag = 1;
	tooltip_info("Strikes");
	
	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select(this).transition().duration(200)
	  .attr("opacity", 0.6);
	d3.select("#border-strikes").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#text-strikes").transition().duration(200)
	.attr("fill", "DarkGray");

	tooltip_flag = 0;
	div.style("display", "none");
});

var text_strikes = GROUP_STRIKES.append("text")
.attr("x", d_st_cx + WIN_SCALE * 115)
.attr("y", d_st_cy + WIN_SCALE * 60)
.text("STRIKES")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "DarkGray")
.attr("id", "text-strikes");







//			RAID HITBOX

var GROUP_RAIDHB = svg_dir.append("g").attr("id", "GROUP_RAIDHB");

var destination_nessusorbit = GROUP_RAIDHB.append("circle")
.attr("cx", function() { return d_no_cx + 770/2 * WIN_SCALE; })
.attr("cy", function() { return d_no_cy + 550/4 * WIN_SCALE; })
.attr("r", 50)
.attr("opacity", 0)
.on("mouseover", function() {
	d3.select("#border-leviathan1").transition().duration(200)
	  .attr("opacity", 1);
	d3.select("#border-leviathan2").transition().duration(200)
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
	d3.select("#border-leviathan1").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#border-leviathan2").transition().duration(200)
	  .attr("opacity", 0.4);
	d3.select("#text-leviathan").transition().duration(200)
	.attr("fill", "DarkGray");
	
	div.style("display", "none");
});









//	THE TRAVELER

var GROUP_TRAVELER = svg_dir.append("g").attr("id", "GROUP_TRAVELER");

var d_tr_cx = WIN_WIDTH/2;
var d_tr_cy = WIN_HEIGHT/2;
var d_tr_r = WIN_SCALE * 80;

var destination_traveler_bg = GROUP_TRAVELER.append("image")
.attr("x", function() { return d_tr_cx - (480/2 * WIN_SCALE); })
.attr("y", function() { return d_tr_cy - (480/2 * WIN_SCALE); })
.attr("width", function() { return 480 * WIN_SCALE; })
.attr("height", function() { return 480 * WIN_SCALE; })
.attr("xlink:href", "img/traveler/traveler.PNG");


var destination_traveler = GROUP_TRAVELER.append("image")
.attr("x", function() { return d_tr_cx - (256/2 * WIN_SCALE); })
.attr("y", function() { return d_tr_cy - (256/2 * WIN_SCALE); })
.attr("width", function() { return 256 * WIN_SCALE; })
.attr("height", function() { return 256 * WIN_SCALE; })
.attr("opacity", 0.4)
.attr("xlink:href", "img/traveler/border.PNG")
.attr("id", "border-traveler");


var destiny_travelerhb = GROUP_TRAVELER.append("circle")
.attr("cx", function() { return d_tr_cx - (0/2 * WIN_SCALE); })
.attr("cy", function() { return d_tr_cy - (0/2 * WIN_SCALE); })
.attr("r", function() { return 75 * WIN_SCALE; })
.attr("opacity",0)
.on("mouseover", function() {
	d3.select("#border-traveler").transition().duration(200)
	.attr("opacity", 0.7);

	d3.select("#text-traveler").transition().duration(200)
	.attr("fill", "white");

	tooltip_info("The Traveler");

	div.style("display", "inline");
})
.on("mousemove", function() {
	tooltip_display();
})
.on("mouseout", function() {
	d3.select("#border-traveler").transition().duration(200)
		.attr("opacity", 0.4);
	d3.select("#text-traveler").transition().duration(200)
		.attr("fill", "DarkGray");
	div.style("display", "none");
});	


var text_traveler = GROUP_TRAVELER.append("text")
.attr("x", d_tr_cx + d_tr_r * 1.5)
.attr("y", d_tr_cy)
.text("THE TRAVELER")
.attr("font-family", "'EB Garamond', serif")
.attr("font-size", "16px")
.attr("letter-spacing", "12px")
.attr("fill", "DarkGray")
.attr("id", "text-traveler");


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
