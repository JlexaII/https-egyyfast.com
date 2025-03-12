console.log('Main.js at your service:)')

const table_links = document.querySelectorAll(".table_link")

for (let link of table_links) {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = this.getAttribute('data-href').replace('#', '')

        window.scrollTo({
            behavior: 'smooth',
            top: document.getElementById(blockID).getBoundingClientRect().top - document.body.getBoundingClientRect().top - 70,
        })
    })
}

if (document.querySelector('.scrollTop')) {
    document.querySelector('.scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
}


function openCloseMenu(e) {
    e.preventDefault()
    document.getElementById('mobileMenu').toggleAttribute('hidden')
    document.querySelector('.overlay').toggleAttribute('hidden')
}

if (document.querySelector('.burger')) {
    document.querySelector('.burger').addEventListener('click', openCloseMenu)
    document.querySelector('.close').addEventListener('click', openCloseMenu)
    document.querySelector('.overlay').addEventListener('click', openCloseMenu)
}

/* 
for (let b of document.querySelectorAll('button:not(.apkClick):not(.slider-btn)')) {
    b.addEventListener('click', function () {
        // Оставляем только перенаправление
        let link = 'ССЫЛКУ СЮДА';
        location.href = link;
    });
} */



// Button android
if (document.querySelector('.apkClick')) {

    document.querySelector('.apkClick').addEventListener('click', function () {
        location.href = '#';
    })

}

const handleScroll = () => {
    if (window.scrollY > 1000) {
        document.querySelector('.scrollTop').style.opacity = '1';
    } else {
        document.querySelector('.scrollTop').style.opacity = '0';
    }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function () {
    let promoCodeCopy = document.querySelector('.content-side__promocode-copy');
    let promoCodeButton = document.querySelector('.content-side__promocode-button');

    promoCodeButton.addEventListener('click', function (e) {
        e.preventDefault();
        navigator.clipboard.writeText(promoCodeCopy.textContent);
    });
});

let thirdScroll = false
let halfScroll = false
let fullScroll = false

let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderWrapper = document.querySelector('.slider-wrapper');
const dots = document.querySelectorAll('.dot');

function showSlide() {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    const offset = index * -100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function changeSlide(step) {
    index += step;
    showSlide();
}

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showSlide();
    });
});

showSlide();

setInterval(() => {
    index++;
    showSlide();
}, 6000);

function myFunction(button) {
    let dropdown = button.nextElementSibling;
    
    // Закрываем все остальные выпадающие списки
    document.querySelectorAll(".dropdown-content").forEach((menu) => {
        if (menu !== dropdown) {
            menu.classList.remove("show", "open-up");
        }
    });

    // Определяем положение списка
    let rect = dropdown.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (rect.bottom > windowHeight) {
        dropdown.classList.add("open-up"); // Открываем вверх
    } else {
        dropdown.classList.remove("open-up"); // Открываем вниз
    }

    dropdown.classList.toggle("show");
}

// Закрываем меню при клике вне списка
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll(".dropdown-content").forEach((menu) => {
            menu.classList.remove("show", "open-up");
        });
    }
};
