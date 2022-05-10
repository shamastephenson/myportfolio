// HAMBURGER SIDE BAR ANIMATION

{
  let hamburgerBtn = document.getElementById("hamburger-menu");
  let sideBar = document.querySelector(".side-bar");
  hamburgerBtn.onclick = function () {
    hamburgerBtn.classList.toggle("active");
    sideBar.classList.toggle("active");
  };
}

// GSAP ANIMATION ON START
const startTl = gsap.timeline({ defaults: { ease: "power2.out" } });

startTl.fromTo(
  ".img-box",
  { opacity: 0 },
  { opacity: 1, duration: 0.4, stagger: 0.1, y: "0" }
),

  startTl.fromTo(
    ".box",
    { opacity: "0" },
    { opacity: 1, duration: 0.1, stagger: 0.1 }
  );






TweenMax.to(".loading-screen", 1.5, {
  delay: 1,
  top: "-110%",
  ease: Expo.easeInOut
});

TweenMax.from(".logo", 1, {
  delay: 1.8,
  opacity: 0,
  y: 10,
  rotate:360,
  ease: Expo.easeInOut
});
TweenMax.from(".logo-load", 1, {
  delay:.2,
scale:1.5,
rotate:360,
  ease: Expo.easeInOut
});


TweenMax.from("#two", 1, {
  delay: 2.4,
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from("#one", 1, {
  delay: 2.4,
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from(".media ul li", 1, {
  delay: 2.1,
  opacity: 0,
  stagger:.2,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from(".about-img", 1, {
  delay: 2.1,
  opacity: 0,
 
  ease: Expo.easeInOut
});

TweenMax.from(".anim", 1, {
  delay: 2.1,
  opacity: 0,
 
  ease: Expo.easeInOut
});










TweenMax.from(".hl", 1, {
  delay: 2,
  opacity: 0,
  x: 10,
  ease: Expo.easeInOut
});


TweenMax.from(".hm", 1, {
  delay: 2.1,
  opacity: 0,
  y:10,
  ease: Expo.easeInOut
});


TweenMax.from(".hs", 1, {
  delay: 2.1,
  opacity: 0,
  y:10,
  ease: Expo.easeInOut
});

TweenMax.from(".nav-bar-full", 1, {
  delay: 2.3,
  opacity: 0,
  y:10,
  ease: Expo.easeInOut
});



// Scroll to top button

{
  const toTop = document.querySelector("#top-btn");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (window.pageYOffset > 325) {
      //Show backtopTopButton

      if (!toTop.classList.contains("btn-entrance")) {
        toTop.classList.remove("btn-exit");
        toTop.classList.add("btn-entrance");
        toTop.style.display = "block";
      }
    } else {
      //hide backtoptopbutton

      if (toTop.classList.contains("btn-entrance")) {
        toTop.classList.remove("btn-entrance");
        toTop.classList.add("btn-exit");
        setTimeout(function () {
          toTop.style.display = "none";
        }, 250);
      }
    }
  }

  //Click scroll button
  toTop.addEventListener("click", backToTop);

  function backToTop() {
    window.scrollTo(0, 0);
  }
}

// DISAPPEAR LOGO

// Scroll to top button

const logo = document.querySelector("#logo-link");

// Only for mobile devices

window.addEventListener("scroll", logoScroll);

function logoScroll() {
  if (window.outerWidth && window.outerWidth < 768) {
    if (window.pageYOffset > 20) {
      //Hide backtopTopButton

      if (!logo.classList.contains("btn-exit")) {
        logo.classList.remove("btn-entrance");
        logo.classList.add("btn-exit");
      }
    } else {
      //hide backtoptopbutton

      if (logo.classList.contains("btn-exit")) {
        logo.classList.remove("btn-exit");
        logo.classList.add("btn-entrance");
      }
    }
  }
}


{
const modal = document.querySelector('.modal');
const preview = document.querySelectorAll('.project-descrp img');
const  modalImg = document.querySelector('.modal-img');


preview.forEach(preview =>{

  preview.addEventListener('click',() => {
modal.classList.add("open");

// dynamically changing text and image 
const originalSrc = preview.getAttribute("src");
modalImg.src = originalSrc;

  });
});


modal.addEventListener('click',(e) =>{

if(e.target.classList.contains('modal')){
  modal.classList.remove("open");
}
});



}
