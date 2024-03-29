$("#home").on('click', function(){
	window.location = "../../inicio.html";
});

$("#animateTetra").on('click', function(){
	window.location = "#";
});

$("#linesTetra").on('click', function(){
	window.location = "../pages/3dLinesTetra.html";
});

$("#tetra").on('click', function(){
	window.location = "../pages/tetra.html";
});

$("#animateOcta").on('click', function(){
	//
});

$("#linesOcta").on('click', function(){
	window.location = "../pages/3dLinesOcta.html";
});

$("#octa").on('click', function(){
	window.location = "../pages/octa.html";
});

var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		var step = 0;
		var requestAnimationFrame = window.requestAnimationFrame || 
		                            window.mozRequestAnimationFrame || 
		                            window.webkitRequestAnimationFrame || 
		                            window.msRequestAnimationFrame;

		function next() {
			step++;
			load();
		}

		function prev() {
			if(step > 0){
				step--;
				load();
			}
		}

		function draw(x1,y1,x2,y2,color) {
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.strokeStyle = color;
			ctx.stroke();
			requestAnimationFrame(draw);
		}

		function load3d() {
			window.location = "../pages/3dLinesTetra.html";
		}

		function load() {
			ctx.clearRect(0, 0, 600, 600);
			switch(step){
				case 1:
					draw(75,200,525,200, "#00F");	
					draw(75,400,525,400, "#F00");
					break;
				case 2:
					step = 1;
					load();
					step = 2;
					draw(225,190,225,210,"#000");
					draw(375,190,375,210,"#000");
					draw(225,390,225,410,"#000");
					draw(375,390,375,410,"#000");
					break;
				case 3:
					draw(65,200,215,200, "#00F");
					draw(225,200,375,200, "#00F");
					draw(385,200,535,200, "#00F");
					draw(65,400,215,400, "#F00");
					draw(225,400,375,400, "#F00");
					draw(385,400,535,400, "#F00");
					break;
				case 4:
					animate()
					draw(300,100,225,200, "#00F");
					draw(225,200,375,200, "#00F");
					draw(375,200,300,100, "#00F");

					draw(300,500,225,400, "#F00");
					draw(225,400,375,400, "#F00");
					draw(375,400,300,500, "#F00");
					break;
				case 5:
					draw(200,100,125,200, "#00F");
					draw(225,200,375,200, "#00F");
					draw(475,200,400,100, "#00F");

					draw(300,500,225,400, "#F00");
					draw(225,400,375,400, "#F00");
					draw(375,400,300,500, "#F00");
					break;
				case 6:
					draw(300,100,225,200, "#00F");
					draw(300,100,300,230, "#00F");
					draw(375,200,300,100, "#00F");

					draw(300,500,225,400, "#F00");
					draw(225,400,375,400, "#F00");
					draw(375,400,300,500, "#F00");
					break;
				case 7:
					draw(300,200,190,355, "#00F"); // /
					draw(300,200,300,425, "#00F"); // |
					draw(375,355,300,200, "#00F"); // \

					draw(300,425,190,355, "#F00"); // /
					draw(190,355,375,355, "#F00"); // -
					draw(375,355,300,425, "#F00"); // \
					setTimeout(function(){
						load3d();
					},500);
					break;
				default:
					console.log("erro!");
					break;
			}
		}
