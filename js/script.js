const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
const burger = document.getElementById('menu__burger');
const menu = document.getElementById('menu');
const sidebar = document.getElementById('fixed-panel');
const anchors = document.querySelectorAll('a[href*="#"]');

burger.onclick = function() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  sidebar.classList.toggle('active');
  body.classList.toggle('hidden');
};

document.onclick = function(e) {
  if (!e.target.closest('#menu__burger') && !e.target.closest('#menu') && !e.target.closest('#fixed-panel')) {
    menu.classList.remove('active');
    burger.classList.remove('active');
    sidebar.classList.remove('active');
    body.classList.remove('hidden');
  }
};

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }
 
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

const swiper = new Swiper('.first-screen__swiper', {
  allowTouchMove: false,
  effect: "cards",
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

const projects = new Swiper('.projects__swiper', {
  grabCursor: true,
  width: 442,
  freeMode: true,
  // loop: true,
  // loopedSlides: 4,
});

const partners = new Swiper('.partners__swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    624: {
      slidesPerView: 2,
    },
    994: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  }
});