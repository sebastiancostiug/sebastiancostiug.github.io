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
	var containerWidth = Math.floor($("div.container").width());
	var navMenuToggle = $("#toggle");
	$("#toggle").change(function() {
		let percentHight = $("div.accent").height() * 100 / $("div.container").height();
		if (percentHight < 25) {
			console.log(percentHight + " --IF");
		} else if ($(this).is(":checked")) {
			console.log(percentHight + " --ELSE IF MENU CLOSED");
			$("div.accent").animate({ height: "30%" }, 500);
		} else if (!$(this).is(":checked")) {
			console.log(percentHight + " --ELSE IF MENU OPEN");
			$("div.accent").animate({ height: "50%" }, 500);
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
		if (grinHeadPosition.top == presentGrinHeadPosition.top && containerWidth > 736) {
			grinHead.fadeOut(500);
			grinHead.animate(
				{
					left : "-23%",
					top  : "23%"
				},
				{
					step     : function(now, fx) {
						$(this).css("-webkit-transform", "rotate(" + now * 2.5 + "deg)");
						$(this).css("-moz-transform", "rotate(" + now * 2.5 + "deg)");
						$(this).css("transform", "rotate(" + now * 2.5 + "deg)");
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
		if (grinHeadPosition.top == presentGrinHeadPosition.top && containerWidth > 736) {
			grinHead.fadeOut(500);
			grinHead.animate(
				{
					left : "-23%",
					top  : "23%"
				},
				{
					step     : function(now, fx) {
						$(this).css("-webkit-transform", "rotate(" + now * 2.5 + "deg)");
						$(this).css("-moz-transform", "rotate(" + now * 2.5 + "deg)");
						$(this).css("transform", "rotate(" + now * 2.5 + "deg)");
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
		$("#contactForm :input").prop("disabled", true);
		$("#disabledForm").delay(5000).fadeIn(3000);
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
		if (grinHeadPosition.top == presentGrinHeadPosition.top && containerWidth > 736) {
			grinHead.fadeOut(500);
			grinHead.animate(
				{
					left : "-23%",
					top  : "23%"
				},
				{
					step     : function(now, fx) {
						$(this).css("-webkit-transform", "rotate(" + now * 2.5 + "deg)");
						$(this).css("-moz-transform", "rotate(" + now * 2.5 + "deg)");
						$(this).css("transform", "rotate(" + now * 2.5 + "deg)");
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
