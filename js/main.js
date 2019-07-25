$(document).ready(function(e) {
	var portfolioBtn = $("#portfolio");
	var aboutBtn = $("#about");
	var contactBtn = $("#contact");
	var menu = $("footer.row>div.menu");
	var grinHead = $("#grinHead");
	grinHeadPosition = grinHead.position();
	portfolioBtn.click(function(e) {
		var presentGrinHeadPosition = grinHead.position();
		e.preventDefault();
		var contentSection = $("div.divisor>div.accent");
		contentSection.animate({ height: "+55vh" }, 1000);
		menu.fadeOut(500);
		portfolioBtn.delay(500).fadeOut(500);
		contactBtn.delay(500).fadeIn(1000);
		menu.delay(600).queue(function(next) {
			$(this).css("flex-direction", "row");
			next();
		});
		menu.delay(500).fadeIn(1000);
		if (grinHeadPosition.top == presentGrinHeadPosition.top) {
			grinHead.fadeOut(500);
			grinHead.animate(
				{
					left   : "-9vw",
					bottom : "18vh"
				},
				{
					step     : function(now, fx) {
						$(this).css("-webkit-transform", "rotate(" + now * 3.7 + "deg)");
						$(this).css("-moz-transform", "rotate(" + now * 3.7 + "deg)");
						$(this).css("transform", "rotate(" + now * 3.7 + "deg)");
					},
					duration : 1000
				},
				1000
			);
			grinHead.fadeIn(500);
		}
		$("section.contact").fadeOut(500);
		$("section.portfolio").delay(1000).fadeIn(1000);
	});
	contactBtn.click(function(e) {
		var presentGrinHeadPosition = grinHead.position();
		e.preventDefault();
		var contentSection = $("div.divisor>div.accent");
		contentSection.animate({ height: "+55vh" }, 1000);
		menu.fadeOut(500);
		contactBtn.delay(500).fadeOut(500);
		portfolioBtn.delay(500).fadeIn(1000);
		menu.delay(600).queue(function(next) {
			$(this).css("flex-direction", "row");
			next();
		});
		menu.delay(500).fadeIn(1000);
		if (grinHeadPosition.top == presentGrinHeadPosition.top) {
			grinHead.fadeOut(500);
			grinHead.animate(
				{
					left   : "-9vw",
					bottom : "18vh"
				},
				{
					step     : function(now, fx) {
						$(this).css("-webkit-transform", "rotate(" + now * 3.7 + "deg)");
						$(this).css("-moz-transform", "rotate(" + now * 3.7 + "deg)");
						$(this).css("transform", "rotate(" + now * 3.7 + "deg)");
					},
					duration : 1000
				},
				1000
			);
			grinHead.fadeIn(500);
		}
		$("section.portfolio").fadeOut(500);
		$("section.contact").delay(1000).fadeIn(1000);
	});
});
