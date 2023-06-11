"use strict";
// Transparent NavBar
// window.addEventListener('scroll', function() {
//     if(window.scrollY > 90 ) {
//         document.querySelector('.nav').style.opacity = 0.9;
//     } else {
//         document.querySelector('.nav').style.opacity = 1;
//     }
// });

// function carousel() {
//     let carouselSlider = document.querySelector('.scrolls-by');
//     let list = document.querySelector('.card-pad');
//     let item = document.querySelectorAll('.cards')
//     let list2;

//     const speed = 1;

//     const width = list.offsetWidth;
//     let x = 0;
//     let x2 = width;

//     function clone() {
//         list2 = list.cloneNode(true);
//         carouselSlider.appendChild(list2);
//         list2.style.left = `${width}px`;
//     }

//     function moveFirst() {
//         x -= speed;

//         if (width >= Math.abs(x)) {
//             list.style.left = `${x}px`;
//         } else {
//             x = width;
//         }
//     }

//     function moveSecond() {
//         x2 -= speed;

//         if (list2.offsetWidth >= Math.abs(x2)) {
//             list2.style.left = `${x2}px`;
//         } else {
//             x2 = width;
//         }
//     }

//     clone();

//     let a = setInterval(moveFirst, 20);
//     let b = setInterval(moveSecond, 10);
// }

// carousel();
// // slider();

const carousel = document.querySelector('.scrolls-click');
const firstImg = carousel.querySelectorAll('img')[0];
const arrowIcons = document.querySelectorAll('.arrow');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 50; // getting image width and adding 14 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
        // console.log(icon);
    })
})

const dragStart = (e) => {
    // updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging');
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    // console.log(e.pageX);
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);

// const primaryNav = document.querySelector('.nav');
// const navToggle = document.querySelector('.menu-bar');

// navToggle.addEventListener('click', () => {
//     const visibility = primaryNav.getAttribute('data-visible');

//     if (visibility === 'false') {
//         primaryNav.setAttribute('data-visible', true);
//     } else if (visibility === 'true') {
//         primaryNav.setAttribute('data-visible', false);
//     }
// });

let navigationBar = document.querySelector('.nav');
let menuBar = document.querySelector('.menu-bar');
let closeBar = document.querySelector('.close-bar');

menuBar.addEventListener('click', function() {
    navigationBar.classList.add('active');
})

closeBar.addEventListener('click', function() {
    navigationBar.classList.remove('active');
})

// accordion
const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item, index) => {
    let header = item.querySelector('.header')
    header.addEventListener('click', () => {
        item.classList.toggle('open');
    
    let description = item.querySelector('.description');
    if (item.classList.contains('open')) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector('i').classList.replace("fa-plus", "fa-minus");
    } else {
            description.style.height = '0px';
            item.querySelector('i').classList.replace("fa-minus", "fa-plus");
    }
        console.log(description)
    })

})


