let burger = document.getElementById("burger-bar");
let linkUl = document.getElementById("link-ul");
let login = document.getElementById("login");
let popup = document.getElementById("popup");
let close = document.getElementById("close");
let up = document.getElementById("up");

burger.onclick = function () {
  linkUl.classList.toggle("linkUnvisible");
};

login.onclick = function () {
  popup.style.display = "flex";
  popup.style.opacity = 1;
  popup.style.top = 0;
};

close.onclick = function () {
  popup.style.display = "none";
  popup.style.opacity = 0;
};

let parentOfLayer = document.getElementById("parent-of-layer");
// document.addEventListener("mousemove", move);

document.getElementById("landing").onmousemove = move;

function move(e) {
  document.querySelectorAll("#layer").forEach((l) => {
    let speed = l.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX * speed) / 80;
    let y = (window.innerHeight - e.pageY * speed) / 80;
    l.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

document.getElementById("landing").onmouseleave = function () {
  document.querySelectorAll("#layer").forEach((l) => {
    l.style.transform = `translateX(0px) translateY(0px)`;
  });
};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-swiper", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

window.onscroll = function () {
  if (window.scrollY >= 600) {
    up.style.visibility = "visible";
    up.style.zIndex = 10000;
  } else {
    up.style.visibility = "hidden";
    up.style.zIndex = -12342;
  }
};
console.log("🎉");
