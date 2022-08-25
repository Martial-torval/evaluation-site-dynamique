let responsiveMenu = document.getElementById('mobileMenu');
let burger = document.getElementById('burger');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');

burger.addEventListener('click', open_menu);

function open_menu() {
    if(responsiveMenu.classList.contains('hidden')) {
    responsiveMenu.classList.remove('hidden');
    responsiveMenu.classList.add('block')
    line1.style.transform = 'rotate(45deg)';
    line2.style.transform = 'rotate(130deg)';
    line3.style.display = 'none';

    }
    else {
    responsiveMenu.classList.remove('block')
    responsiveMenu.classList.add('hidden');
    line1.style.transform = 'initial';
    line2.style.transform = 'initial';
    line3.style.display = 'block';
    }
}