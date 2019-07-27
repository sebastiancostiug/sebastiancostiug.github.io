$(document).ready(function(e) {
	var portfolioBtn = $("#portfolio");
	var aboutBtn = $("#about");
	var contactBtn = $("#contact");
	var menu = $("footer.row>div.menu");
	var grinHead = $("#grinHead");
	var grinHeadPosition = grinHead.position();
	var headerHeight = Math.floor($("header.row").height());
	var footerHeight = Math.floor($("footer.navMenu").height());
	var neutralHeight = Math.floor($("section.content>div.neutral").height());
	var containerHeight = Math.floor($("div.container").height());
	var navMenuToggle = $("#toggle");
	$("#toggle").change(function() {
		let percentHight = $("div.accent").height() * 100 / $("div.container").height();
		if (20 < percentHight && percentHight < 70 && !$(this).is(":checked")) {
			console.log(percentHight + " --IF");
			$("div.accent").animate({ height: "70%" }, 500);
		} else if ($(this).is(":checked") && 70 > percentHight && percentHight > 20) {
			console.log(percentHight + " --ELSE IF");
			$("div.accent").animate({ height: "40%" }, 500);
		} else {
			console.log(percentHight + " --ELSE");
		}
	});
	portfolioBtn.click(function(e) {
		e.preventDefault();
		navMenuToggle.prop("checked", false);
		var presentGrinHeadPosition = grinHead.position();
		var contentSection = $("div.accent");
		var contentContainer = $("section.content");
		var contentHeight = Math.floor(containerHeight - headerHeight - footerHeight - 2 * neutralHeight);
		contentContainer.animate({ top: `${headerHeight}px` }, 1000);
		contentSection.animate({ height: `${contentHeight}px` }, 1000);
		menu.fadeOut(500);
		portfolioBtn.delay(500).fadeOut(500);
		contactBtn.delay(500).fadeIn(1000);
		aboutBtn.delay(500).fadeIn(1000);
		menu.delay(600).queue(function(next) {
			$(this).css("flex-direction", "row");
			next();
		});
		menu.delay(500).fadeIn(1000);
		if (grinHeadPosition.top == presentGrinHeadPosition.top) {
			grinHead.fadeOut(500);
			grinHead.animate(
				{
					left : "-14%",
					top  : "40%"
				},
				{
					step     : function(now, fx) {
						$(this).css("-webkit-transform", "rotate(" + now * 1.8 + "deg)");
						$(this).css("-moz-transform", "rotate(" + now * 1.8 + "deg)");
						$(this).css("transform", "rotate(" + now * 1.8 + "deg)");
					},
					duration : 1000
				},
				1000
			);
			grinHead.fadeIn(500);
		}
		$("section.contact").fadeOut(500);
		$("section.about").fadeOut(500);
		$("section.portfolio").delay(1000).fadeIn(1000);
	});
	contactBtn.click(function(e) {
		e.preventDefault();
		navMenuToggle.prop("checked", false);
		var presentGrinHeadPosition = grinHead.position();
		var contentSection = $("div.accent");
		var contentContainer = $("section.content");
		var contentHeight = Math.floor(containerHeight - headerHeight - footerHeight - 2 * neutralHeight);
		contentContainer.animate({ top: `${headerHeight}px` }, 1000);
		contentSection.animate({ height: `${contentHeight}px` }, 1000);
		menu.fadeOut(500);
		contactBtn.delay(500).fadeOut(500);
		portfolioBtn.delay(500).fadeIn(1000);
		aboutBtn.delay(500).fadeIn(1000);
		menu.delay(600).queue(function(next) {
			$(this).css("flex-direction", "row");
			next();
		});
		menu.delay(500).fadeIn(1000);
		if (grinHeadPosition.top == presentGrinHeadPosition.top) {
			grinHead.fadeOut(500);
			grinHead.animate(
				{
					left : "3vw",
					top  : "37vh"
				},
				{
					step     : function(now, fx) {
						$(this).css("-webkit-transform", "rotate(" + now * 1.8 + "deg)");
						$(this).css("-moz-transform", "rotate(" + now * 1.8 + "deg)");
						$(this).css("transform", "rotate(" + now * 1.8 + "deg)");
					},
					duration : 1000
				},
				1000
			);
			grinHead.fadeIn(500);
		}
		$("section.portfolio").fadeOut(500);
		$("section.about").fadeOut(500);
		$("section.contact").delay(1000).fadeIn(1000);
	});
	aboutBtn.click(function(e) {
		e.preventDefault();
		navMenuToggle.prop("checked", false);
		var presentGrinHeadPosition = grinHead.position();
		var contentSection = $("div.accent");
		var contentContainer = $("section.content");
		var contentHeight = Math.floor(containerHeight - headerHeight - footerHeight - 2 * neutralHeight);
		contentContainer.animate({ top: `${headerHeight}px` }, 1000);
		contentSection.animate({ height: `${contentHeight}px` }, 1000);
		menu.fadeOut(500);
		aboutBtn.delay(500).fadeOut(500);
		contactBtn.delay(500).fadeIn(1000);
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
					left : "3vw",
					top  : "37vh"
				},
				{
					step     : function(now, fx) {
						$(this).css("-webkit-transform", "rotate(" + now * 1.8 + "deg)");
						$(this).css("-moz-transform", "rotate(" + now * 1.8 + "deg)");
						$(this).css("transform", "rotate(" + now * 1.8 + "deg)");
					},
					duration : 1000
				},
				1000
			);
			grinHead.fadeIn(500);
		}
		$("section.portfolio").fadeOut(500);
		$("section.contact").fadeOut(500);
		$("section.about").delay(1000).fadeIn(1000);
	});
});
