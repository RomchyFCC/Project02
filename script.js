const header = document.querySelector("nav");
const slider = document.querySelectorAll(".display-pick a");
const display = document.querySelector(".slideshow");
const all = document.getElementById("all");
const web = document.getElementById("web");
const ui = document.getElementById("ui");
const foto = document.getElementById("foto");
const brand = document.getElementById("brand");
const portfolio = document.querySelectorAll(".images img");
const pic = document.querySelectorAll(".picPick");

function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

function fade(e) {
	if (window.scrollY >= 500) {
		header.classList.add("fade");
	} else {
		header.classList.remove("fade");
	}
}


function swoosh(e) {
	e.preventDefault();
	const anchor = document.querySelectorAll(".display-pick a");
	anchor.forEach(anch => {
		anch.classList.remove("fontawesome-circle");
		anch.classList.add("fontawesome-circle-blank");
	});

	e.target.classList.add("fontawesome-circle");
	if (e.target.id == 1) {
		display.style.left = "0";
	}
	if (e.target.id == 2) {
		display.style.left = "-960px";
	}
	if (e.target.id == 3) {
		display.style.left = "-1920px";
	}
}

function imageDisplay (e) {
	e.preventDefault();
	pic.forEach(pict => pict.classList.remove("button-active"));
	if(this.id == "all") {
		
		portfolio.forEach(image => image.classList.remove("hide"));
		this.classList.add("button-active");
	}
	if(this.id == "web") {
		portfolio.forEach(image => image.classList.remove("hide"));
		portfolio.forEach(image => {
			if(!image.classList.contains("web")) {
				image.classList.add("hide");
			}
		});
		this.classList.add("button-active");
	}
	if(this.id == "ui") {
		portfolio.forEach(image => image.classList.remove("hide"));
		portfolio.forEach(image => {
			if(!image.classList.contains("ui")) {
				image.classList.add("hide");
			}
		});
		this.classList.add("button-active");
	}
	if(this.id == "brand") {
		portfolio.forEach(image => image.classList.remove("hide"));
		portfolio.forEach(image => {
			if(!image.classList.contains("brand")) {
				image.classList.add("hide");
			}
		});
		this.classList.add("button-active");
	}
	if(this.id == "foto") {
		portfolio.forEach(image => image.classList.remove("hide"));
		portfolio.forEach(image => {
			if(!image.classList.contains("foto")) {
				image.classList.add("hide");
			}
		});
		this.classList.add("button-active");
	}
}

all.addEventListener("click", imageDisplay);
ui.addEventListener("click", imageDisplay);
web.addEventListener("click", imageDisplay);
brand.addEventListener("click", imageDisplay);
foto.addEventListener("click", imageDisplay);
slider.forEach(slide => slide.addEventListener("click", swoosh));
window.addEventListener("scroll", debounce(fade));
//window.addEventListener("click", (e)=>e.preventDefault());