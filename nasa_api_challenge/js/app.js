$(function() {
	let container = $(".container>.row.galleryPage");
	container.html("");
	let toInsert;
	let imgList = [];
	let mainUrl =
		"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=C9myK9Vp8WkYUoSp4X1tcB74Lob3Fe8bf9ieJEGc";
	$.ajax({
		url: mainUrl,
		method: "get",
		dataType: "json"
	})
		.done(function(response) {
			imgList = response.photos;
			console.log(imgList);
			$("body>div.col-12.startPage").css(
				"background",
				`url(${imgList[Math.floor(Math.random() * 856)].img_src})`
			);
			imgList.forEach(function(element) {
				galleryItem = `<li class="col-4 image" background="${element.img_src}"></li>`;
				toInsert = $(galleryItem);
			});
		})
		.fail(function(response) {
			infoBar.text("Error");
		});

	$("button.enterBtn").on("click", function(e) {
		$("body>div.col-12").removeClass("hide");
		$("body>div.col-12").addClass("show");
		$("body>div.col-12.startPage").removeClass("show");
		$("body>div.col-12.startPage").addClass("hide");
		container.append($(toInsert));
	});
	$("button.backBtn").on("click", function(e) {
		$("body>div.col-12.startPage").css("background", `url(${imgList[Math.floor(Math.random() * 856)].img_src})`);
		$("body>div.col-12").removeClass("show");
		$("body>div.col-12").addClass("hide");
		$("body>div.col-12.startPage").removeClass("hide");
		$("body>div.col-12.startPage").addClass("show");
		container.html($(""));
	});
});
