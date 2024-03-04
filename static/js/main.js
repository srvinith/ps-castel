// -----------nav sticky bg---------
window.addEventListener("scroll", () => {
    var header = document.querySelector("nav");
    var navItem = document.querySelector("nav-item");
    var navLink = document.querySelector("nav-link")
    header.classList.toggle("sticky", window.scrollY > 0)
    navItem.classList.toogle("nav-a", window.scrollY > 0)
    navLink.classList.toogle("navsticky", window.scrollY > 0)
})

// ------------nav sticky bg---------

const bgOne = document.querySelector('.bg-1')
const bgTwo = document.querySelector('.bg-2')
const bgThree = document.querySelector('.bg-3')
const homeBtnOne = document.querySelector('.img-1-bg')
const homeBtnTwo = document.querySelector('.img-2-bg')
const homeBtnThree = document.querySelector('.img-3-bg')



homeBtnOne.addEventListener('click', () => {
    bgOne.style.display = 'block'
    bgTwo.style.display = 'none'
    bgThree.style.display = 'none'
    homeBtnOne.style.border = '2px solid #fff'
    homeBtnTwo.style.border = '2px solid transparent'
    homeBtnThree.style.border = '2px solid transparent'
})
homeBtnTwo.addEventListener('click', () => {
    bgOne.style.display = 'none'
    bgTwo.style.display = 'none'
    bgThree.style.display = 'block'
    homeBtnOne.style.border = '2px solid transparent'
    homeBtnTwo.style.border = '2px solid #fff'
    homeBtnThree.style.border = '2px solid transparent'
})
homeBtnThree.addEventListener('click', () => {
    bgOne.style.display = 'none'
    bgTwo.style.display = 'block'
    bgThree.style.display = 'none'
    homeBtnOne.style.border = '2px solid transparent'
    homeBtnTwo.style.border = '2px solid transparent'
    homeBtnThree.style.border = '2px solid #fff'
})


// ---count-table start---

const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }

    }

    animate();
});

// ---count-table end---

// ---scrolling slider start---
const mouseWheel = document.querySelector('.box-scroll');
mouseWheel.addEventListener('wheel', function (e) {
    const race = 15; // how many pixels to scroll

    if (e.deltaY > 0) { // Scroll right

        mouseWheel.scrollLeft += race;
    }

    else // Scroll left
        mouseWheel.scrollLeft -= race;
    e.preventDefault();
});
// ---scrolling slider end---

// carousel slider
let items = document.querySelectorAll('.sliderOne .newcarousel')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
// carousel slider
// carousel slider
let itemsTwo = document.querySelectorAll('.sliderTwo .newcarouselTwo')

itemsTwo.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = itemsTwo[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
// carousel slider

// --act nav btn------
// const actBtn = document.querySelector('.act-btn')
// const errorBtn = document.querySelector('.error-btn')

// actBtn.addEventListener('click',()=>{
//     errorBtn.style.display='block'
//     actBtn.style.display='none'
// })
// errorBtn.addEventListener('click',()=>{
//     errorBtn.style.display='none'
//     actBtn.style.display='block'
// })
// --act nav btn------
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview(){
    for(userPic of userPics){
        userPic.classList.remove("active-pic");
    }
    for(userText of userTexts){
        userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);
  
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}

// --------- progress slider start
$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
      nav: false,
      autoplay: true,

    });
  });

  // --------
  $(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");

  });

// --------- progress slider end

const blob = document.querySelector('.blob');
const cursorScale = document.querySelectorAll('.cursor-scale')
window.addEventListener('pointermove', (e) => {
    const { clientX, clientY } = e;
    // console.log(clientX, clientY)
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 1000, fill: "forwards" })
})

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
})

// ------------wave animation start----------//
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active-fade");
      } else {
        reveals[i].classList.remove("active-fade");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  // ---fade animation end---//
  // --carousel start----//
  var $owl = $('.owl-carousel');
  
  $owl.children().each(function (index) {
    $(this).attr('data-position', index); // NB: .attr() instead of .data()
  });

// ------------wave animation send---------//