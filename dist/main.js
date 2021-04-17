// ======= MOBILE MENU =======
let burger = document.getElementById('burger'),
    nav = document.getElementById('main-nav');

burger.addEventListener('click', function () {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

// ======= FOOTER MARGINS =======
window.onresize = function () {
    let height = document.getElementsByTagName('footer')[0].offsetHeight;
    document.getElementById('page').style.marginBottom = String(height) + "px";
}

window.onload = function () {
    let height = document.getElementsByTagName('footer')[0].offsetHeight;
    document.getElementById('page').style.marginBottom = String(height) + "px";
}

// ======= SCROLL REVEAL ========
ScrollReveal().reveal('section .row > div');