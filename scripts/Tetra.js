function Tetra () {};

if($("#tetraStep")[0] && ){
var c = $("#tetraStep")[0];
var ctx = c.getContext("2d");
var step = 0;
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

Tetra.prototype.next = function() {
	step++;
	this.load();
}

Tetra.prototype.prev = function() {
	if(step > 0){
		step--;
		this.load();
	}
}

Tetra.prototype.draw = function(x1,y1,x2,y2,color) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.stroke();
}

Tetra.prototype.loadLinesTetra = function() {
	$("canvas.WorkCanvas").attr('id', 'tetraLinesStep');
	setTimeout(function(){
		LinesTetra.prototype.init();
	});
	// window.location = "3dLinesIndex.html";
}

Tetra.prototype.load = function() {
	ctx.clearRect(0, 0, 600, 600);
	switch(step){
		case 1:
			this.draw(75,200,525,200, "#00F");	
			this.draw(75,400,525,400, "#F00");
			break;
		case 2:
			step = 1;
			this.load();
			step = 2;
			this.draw(225,190,225,210,"#000");
			this.draw(375,190,375,210,"#000");
			this.draw(225,390,225,410,"#000");
			this.draw(375,390,375,410,"#000");
			break;
		case 3:
			this.draw(65,200,215,200, "#00F");
			this.draw(225,200,375,200, "#00F");
			this.draw(385,200,535,200, "#00F");
			this.draw(65,400,215,400, "#F00");
			this.draw(225,400,375,400, "#F00");
			this.draw(385,400,535,400, "#F00");
			break;
		case 4:
			this.draw(300,100,225,200, "#00F");
			this.draw(225,200,375,200, "#00F");
			this.draw(375,200,300,100, "#00F");

			this.draw(300,500,225,400, "#F00");
			this.draw(225,400,375,400, "#F00");
			this.draw(375,400,300,500, "#F00");
			break;
		case 5:
			this.draw(200,100,125,200, "#00F");
			this.draw(225,200,375,200, "#00F");
			this.draw(475,200,400,100, "#00F");

			this.draw(300,500,225,400, "#F00");
			this.draw(225,400,375,400, "#F00");
			this.draw(375,400,300,500, "#F00");
			break;
		case 6:
			this.draw(300,100,225,200, "#00F");
			this.draw(300,100,300,230, "#00F");
			this.draw(375,200,300,100, "#00F");

			this.draw(300,500,225,400, "#F00");
			this.draw(225,400,375,400, "#F00");
			this.draw(375,400,300,500, "#F00");
			break;
		case 7:
			this.draw(300,200,190,355, "#00F"); // /
			this.draw(300,200,300,425, "#00F"); // |
			this.draw(375,355,300,200, "#00F"); // \

			this.draw(300,425,190,355, "#F00"); // /
			this.draw(190,355,375,355, "#F00"); // -
			this.draw(375,355,300,425, "#F00"); // \
			setTimeout(function(){
				Tetra.prototype.loadLinesTetra();
			},500);
			break;
		default:
			console.log("erro!");
			break;
	}
}
}