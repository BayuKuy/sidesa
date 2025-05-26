const menuBar = document.querySelector(".hamburger");
const menuNavigation = document.querySelector(".menu");
menuBar.addEventListener("click", () => {
    menuBar.classList.toggle('is-active');
    menuNavigation.classList.toggle('menu-active');
});


const menuNav = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    menuNav.classList.toggle('nav-scroll-active', window.scrollY > 0);


    windowPosition = window.scrollY > 200;
    menuBar.classList.toggle('btn-active', windowPosition);
    menuBar.classList.remove('is-active');
    menuNavigation.classList.remove('menu-active');
});

const loader = document.querySelector(".loader");
function loaderActive() {
    loader.classList.add("loader-active");
}

function loaderActiveTime() {
    setInterval(loaderActive, 3000);
}
window.onload = loaderActiveTime();





