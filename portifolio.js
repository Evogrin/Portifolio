const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("freeze", window.scrollY > 0);
});

