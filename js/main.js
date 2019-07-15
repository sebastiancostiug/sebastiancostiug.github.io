document.addEventListener("DOMContentLoaded", function(e) {
	const usrMenuBtn = document.querySelector("div.control");
	const slidersBtn = document.getElementById("sweat");
	const bckBtn = document.querySelector("div.ctrlPanel>div.buttons>div.back");
	const handlers = document.querySelectorAll("section.sliders>div>div.handle");
	const radioGender = document.querySelectorAll("form.usrStats>div.gender>label.custom-radio");
	console.log(radioGender);
	usrMenuBtn.addEventListener("click", function(e) {
		event.stopPropagation();
		document.querySelector("nav.mainMenu").classList.remove("show");
		document.querySelector("nav.mainMenu").classList.add("hide");
		document.querySelector("section.sliders").classList.remove("show");
		document.querySelector("section.sliders").classList.add("hide");
		document.querySelector("form.usrStats").classList.remove("hide");
		document.querySelector("form.usrStats").classList.add("show");
	});
	slidersBtn.addEventListener("click", function(e) {
		event.stopPropagation();
		document.querySelector("nav.mainMenu").classList.remove("show");
		document.querySelector("nav.mainMenu").classList.add("hide");
		document.querySelector("form.usrStats").classList.remove("show");
		document.querySelector("form.usrStats").classList.add("hide");
		document.querySelector("section.sliders").classList.remove("hide");
		document.querySelector("section.sliders").classList.add("show");
	});
	bckBtn.addEventListener("click", function(e) {
		event.stopPropagation();
		document.querySelector("form.usrStats").classList.remove("show");
		document.querySelector("form.usrStats").classList.add("hide");
		document.querySelector("section.sliders").classList.remove("show");
		document.querySelector("section.sliders").classList.add("hide");
		document.querySelector("nav.mainMenu").classList.remove("hide");
		document.querySelector("nav.mainMenu").classList.add("show");
	});
	handlers.forEach(function(element) {
		element.addEventListener("touchstart", function(event) {
			event.stopPropagation();
			document.querySelector("section.sliders>div.active").classList.remove("show");
			document.querySelector("section.sliders>div.active").classList.add("hide");
			document.querySelector("section.sliders>div.passive").classList.remove("show");
			document.querySelector("section.sliders>div.passive").classList.add("hide");
			document.querySelector("section.sliders>div.rounds").classList.remove("show");
			document.querySelector("section.sliders>div.rounds").classList.add("hide");
			document.querySelector("section.sliders>div.ctrlPanel").classList.remove("show");
			document.querySelector("section.sliders>div.ctrlPanel").classList.add("hide");
			document.querySelector("section.sliders>div.counter").classList.remove("hide");
			document.querySelector("section.sliders>div.counter").classList.add("show");
		});
		element.addEventListener("touchend", function(event) {
			event.stopPropagation();
			document.querySelector("section.sliders>div.active").classList.remove("hide");
			document.querySelector("section.sliders>div.active").classList.add("show");
			document.querySelector("section.sliders>div.passive").classList.remove("hide");
			document.querySelector("section.sliders>div.passive").classList.add("show");
			document.querySelector("section.sliders>div.rounds").classList.remove("hide");
			document.querySelector("section.sliders>div.rounds").classList.add("show");
			document.querySelector("section.sliders>div.ctrlPanel").classList.remove("hide");
			document.querySelector("section.sliders>div.ctrlPanel").classList.add("show");
			document.querySelector("section.sliders>div.counter").classList.remove("show");
			document.querySelector("section.sliders>div.counter").classList.add("hide");
		});
	});
	radioGender.forEach(function(element) {
		console.log(element);
		element.addEventListener("click", function(event) {
			radioGender.forEach(function(element) {
				event.stopPropagation();
				if (element.firstElementChild.checked) {
					element.style.color = "#92140c";
				} else {
					element.style.color = "#fdf0d5";
				}
			});
		});
	});
});
