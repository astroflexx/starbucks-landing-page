const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)
let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn')
let nextBtn = document.getElementById('nextBtn')

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault(); scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});
nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth"; scrollContainer.scrollLeft += -900;
});