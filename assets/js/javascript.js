//EFECTO SCROLL DEL NAV
/* Código de Liliana Kastilio: https://codepen.io/lili2311/pen/dJjuL< */
window.addEventListener('scroll', function () {
	const distanceY = window.pageYOffset || document.documentElement.scrollTop,
	shrinkOn = 100,
	navElem = document.getElementById('navbar');
	signUp = document.getElementById('signup-btn');
	logo = document.getElementById('logonavbar');

	if (distanceY > shrinkOn) {
		navElem.classList.add("nav-color");
		signUp.classList.add("show-signup-btn");
		logo.src = "assets/images/logo-pink.png";
	} else {
		navElem.classList.remove("nav-color");
		signUp.classList.remove("show-signup-btn");
		logo.src = "assets/images/logo-white.png";
	}
});
/*valida numero phone */

document.getElementById('validarphone').addEventListener('click', function(){
	var input = Array.from(document.getElementsByClassName('input'));
	input.forEach(function(el){
		el.classList.remove('hidden');
	});
});

