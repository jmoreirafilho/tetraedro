var menuStatus = true;
$(document).mousemove(function(e){
	if(e.pageX == 0 && menuStatus){
		menuStatus = false;
		$(".menu-bar").animate({ width: "toggle" }, 300);
	}
})

$(".menu-bar").mouseleave(function(){
	menuStatus = true;
	$(this).animate({width: "toggle"}, 300);
})