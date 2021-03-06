// HAMBURGER MENU OVERLAY

let overlay = document.getElementById('overlay');
let hamburger = document.querySelector('.header__hamburger');
let bars = document.querySelectorAll('.header__hamburger div');
let logo = document.querySelector('.header__nav-img');
let body = document.querySelector('body');
let navElements = document.querySelectorAll('.header__nav li');
let whitespace = document.querySelector('.empty');

hamburger.addEventListener('click', function (e) {
    bars.forEach(function (element) {
            element.classList.toggle('change')
        }
    );
    overlay.classList.toggle('active');
    logo.classList.toggle('hidden');
    body.classList.toggle('no-scroll');
    navElements.forEach(function (element) {
        element.classList.toggle('hamburger')
    });
    whitespace.style.display = whitespace.style.display === 'none' ? '' : 'none';
});