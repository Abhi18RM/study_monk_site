const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

document.addEventListener('DOMContentLoaded', function () {
    var transitionText = document.querySelectorAll('.transition-text');
    var transitionImg = document.querySelectorAll('.transition-img');

    setTimeout(function () {
        for (var i = 0; i < transitionText.length; i++) {
            transitionText[i].classList.add('show');
        }
        for (var j = 0; j < transitionImg.length; j++) {
            transitionImg[j].classList.add('show');
        }
    }, 100);
});

document.addEventListener('DOMContentLoaded', function () {
    var transitionHeading = document.querySelector('.transition-heading');
    var transitionDescription = document.querySelector('.transition-description');

    setTimeout(function () {
        transitionHeading.classList.add('show');
        transitionDescription.classList.add('show');
    }, 100);
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Add the show class to the testi_container when the section is in the viewport
window.addEventListener('scroll', function () {
    var testiContainer = document.querySelector('.testi_container');
    var testiContainerPosition = testiContainer.getBoundingClientRect().top;

    var windowHeight = window.innerHeight;
    if (testiContainerPosition < windowHeight) {
        testiContainer.classList.add('show');
    }
});

// Select the contact section
const contactSection = document.querySelector('.contact');

// Apply transition effect when the page is loaded
window.addEventListener('load', () => {
    contactSection.classList.add('transition');
});
