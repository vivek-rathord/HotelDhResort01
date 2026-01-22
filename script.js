// const header = document.querySelector(".site-header");
// const menuBtn = document.querySelector(".site-menu-toggle");
// const nav = document.querySelector(".site-nav");
// const closeBtn = document.querySelector(".site-close-btn");

// window.addEventListener("scroll", () => {
//   header.classList.toggle("is-scrolled", window.scrollY > 50);
// });

// menuBtn.onclick = () => nav.classList.add("is-active");
// closeBtn.onclick = () => nav.classList.remove("is-active");

// document.querySelectorAll(".site-dropdown > a").forEach(link => {
//   link.addEventListener("click", e => {
//     if (window.innerWidth <= 1024) {
//       e.preventDefault();
//       link.parentElement.classList.toggle("is-active");
//     }
//   });
// });
//   // BOOK ONLINE DROPDOWN
//   let rooms = 3, adult = 1, child = 0;
//   window.toggleDropdown = function(id) {
//     document.querySelectorAll('.dropdown-menu').forEach(d => {
//       if (d.id !== id) d.style.display = 'none';
//     });
//     const el = document.getElementById(id);
//     if(el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
//   }

//   window.changeCount = function(type, value){
//     if(type === 'rooms'){ rooms = Math.max(1, rooms + value); document.getElementById('rooms').innerText = rooms; document.getElementById('roomText').innerText = `${rooms} Room`; }
//     if(type === 'adult'){ adult = Math.max(1, adult + value); document.getElementById('adult').innerText = adult; }
//     if(type === 'child'){ child = Math.max(0, child + value); document.getElementById('child').innerText = child; }
//     document.getElementById('guestText').innerText = `${adult} Adult, ${child} Child`;
//   }

//   document.addEventListener('click', e => {
//     if(!e.target.closest('.dropdown')){
//       document.querySelectorAll('.dropdown-menu').forEach(d=>d.style.display='none');
//     }
//   });

//   // CONTACT FORM
//   if(window.emailjs){
//     emailjs.init("YOUR_PUBLIC_KEY"); // replace with your key
//     const form = document.getElementById("contactForm");
//     if(form){
//       form.addEventListener("submit", function(e){
//         e.preventDefault();
//         emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
//           .then(()=> { alert("Message sent successfully!"); form.reset(); },
//                 err=> alert("FAILED... " + err.text));
//       });
//     }
//   }

//   // DESTINATION WEDDING SLIDER
//   const weddingSlidesData  = [
//     { img:"./images/slide1.webp", title:"VOWS ON THE BEACH", desc:"Let the pristine sands, azure waters, breath-taking sunsets and our immaculate hospitality be the perfect companion for your dream wedding.", left:"ICONIC CITY<br>WEDDINGS", right:"MOUNTAIN<br>WEDDING VOWS" },
//     { img:"./images/w2.jpeg", title:"ROYAL PALACE WEDDINGS", desc:"Experience regal celebrations amidst heritage palaces, timeless architecture and royal grandeur.", left:"BEACH<br>WEDDINGS", right:"ICONIC CITY<br>WEDDINGS" },
//     { img:"./images/w1.jpg", title:"MOUNTAIN WEDDING VOWS", desc:"Exchange vows amidst serene mountains, misty valleys and breathtaking natural beauty.", left:"ROYAL PALACE<br>WEDDINGS", right:"BEACH<br>WEDDINGS" }
//   ];

//   let index = 0;
//   const current = document.getElementById("current");
//   const nextImg = document.getElementById("next");
//   const title = document.getElementById("title");
//   const desc = document.getElementById("desc");
//   const leftText = document.getElementById("leftText");
//   const rightText = document.getElementById("rightText");
//   const leftSide = document.querySelector(".left");
//   const rightSide = document.querySelector(".right");
//   const leftImg = leftSide.querySelector(".side-img");
//   const rightImg = rightSide.querySelector(".side-img");

//   function loadContent(i){
//     if(current){ current.src = weddingSlidesData [i].img; title.innerHTML = weddingSlidesData [i].title; desc.innerHTML = weddingSlidesData [i].desc; leftText.innerHTML = weddingSlidesData [i].left; rightText.innerHTML = weddingSlidesData [i].right; }
//   }
//   loadContent(index);

//   window.next = function(){
//     const newIndex = (index+1) % weddingSlidesData .length;
//     rightImg.style.backgroundImage = `url(${weddingSlidesData [index].img})`;
//     rightSide.classList.add("show");
//     nextImg.src = weddingSlidesData [newIndex].img;
//     current.style.transform = "translateX(-100%)";
//     nextImg.style.transform = "translateX(100%)";
//     setTimeout(()=> nextImg.style.transform = "translateX(0)", 20);
//     setTimeout(()=>{
//       index = newIndex;
//       loadContent(index);
//       current.style.transform = "translateX(0)";
//       rightSide.classList.remove("show");
//     },700);
//   }

//   window.prev = function(){
//     const newIndex = (index-1+weddingSlidesData .length) % weddingSlidesData .length;
//     leftImg.style.backgroundImage = `url(${weddingSlidesData [index].img})`;
//     leftSide.classList.add("show");
//     nextImg.src = weddingSlidesData [newIndex].img;
//     current.style.transform = "translateX(100%)";
//     nextImg.style.transform = "translateX(-100%)";
//     setTimeout(()=> nextImg.style.transform = "translateX(0)",20);
//     setTimeout(()=>{
//       index = newIndex;
//       loadContent(index);
//       current.style.transform = "translateX(0)";
//       leftSide.classList.remove("show");
//     },700);
//   }


// // ------------------------------- Destination weeding event page slider-------------------
// const eventContainer = document.querySelector(".container");

// if (eventContainer) {
//   const eventSlide = eventContainer.querySelector(".slide");
//   const eventNext = eventContainer.querySelector(".next");
//   const eventPrev = eventContainer.querySelector(".prev");

//   if (eventSlide && eventNext && eventPrev) {
//     eventNext.addEventListener("click", () => {
//       const items = eventSlide.querySelectorAll(".item");
//       eventSlide.appendChild(items[0]);
//     });

//     eventPrev.addEventListener("click", () => {
//       const items = eventSlide.querySelectorAll(".item");
//       eventSlide.prepend(items[items.length - 1]);
//     });
//   }
// }



// // noe works






document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------- AOS INIT -------------------------------
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
      disable: false
    });
  }

  // ------------------------------- NAV LOGIC -------------------------------
  const header = document.querySelector(".site-header");
  const menuBtn = document.querySelector(".site-menu-toggle");
  const nav = document.querySelector(".site-nav");
  const closeBtn = document.querySelector(".site-close-btn");

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 50);
  });

  menuBtn.onclick = () => nav.classList.add("is-active");
  closeBtn.onclick = () => nav.classList.remove("is-active");

  document.querySelectorAll(".site-dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        link.parentElement.classList.toggle("is-active");
      }
    });
  });

  // ------------------------------- BOOK ONLINE DROPDOWN -------------------------------
  let rooms = 3, adult = 1, child = 0;
  window.toggleDropdown = function (id) {
    document.querySelectorAll('.dropdown-menu').forEach(d => {
      if (d.id !== id) d.style.display = 'none';
    });
    const el = document.getElementById(id);
    if (el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
  }

  window.changeCount = function (type, value) {
    if (type === 'rooms') {
      rooms = Math.max(1, rooms + value);
      document.getElementById('rooms').innerText = rooms;
      document.getElementById('roomText').innerText = `${rooms} Room`;
    }
    if (type === 'adult') {
      adult = Math.max(1, adult + value);
      document.getElementById('adult').innerText = adult;
    }
    if (type === 'child') {
      child = Math.max(0, child + value);
      document.getElementById('child').innerText = child;
    }
    document.getElementById('guestText').innerText = `${adult} Adult, ${child} Child`;
  }

  document.addEventListener('click', e => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(d => d.style.display = 'none');
    }
  });

  // ------------------------------- CONTACT FORM -------------------------------
  if (window.emailjs) {
    emailjs.init("YOUR_PUBLIC_KEY"); // replace with your key
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
          .then(() => { alert("Message sent successfully!"); form.reset(); },
            err => alert("FAILED... " + err.text));
      });
    }
  }

  // ------------------------------- DESTINATION WEDDING SLIDER -------------------------------
  const weddingSlidesData = [
    { img: "./images/slide1.webp", title: "VOWS ON THE BEACH", desc: "Let the pristine sands, azure waters, breath-taking sunsets and our immaculate hospitality be the perfect companion for your dream wedding.", left: "ICONIC CITY<br>WEDDINGS", right: "MOUNTAIN<br>WEDDING VOWS" },
    { img: "./images/w2.jpeg", title: "ROYAL PALACE WEDDINGS", desc: "Experience regal celebrations amidst heritage palaces, timeless architecture and royal grandeur.", left: "BEACH<br>WEDDINGS", right: "ICONIC CITY<br>WEDDINGS" },
    { img: "./images/w1.jpg", title: "MOUNTAIN WEDDING VOWS", desc: "Exchange vows amidst serene mountains, misty valleys and breathtaking natural beauty.", left: "ROYAL PALACE<br>WEDDINGS", right: "BEACH<br>WEDDINGS" }
  ];

  let index = 0;
  const current = document.getElementById("current");
  const nextImg = document.getElementById("next");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const leftText = document.getElementById("leftText");
  const rightText = document.getElementById("rightText");
  const leftSide = document.querySelector(".left");
  const rightSide = document.querySelector(".right");
  const leftImg = leftSide.querySelector(".side-img");
  const rightImg = rightSide.querySelector(".side-img");

  function loadContent(i) {
    if (current) {
      current.src = weddingSlidesData[i].img;
      title.innerHTML = weddingSlidesData[i].title;
      desc.innerHTML = weddingSlidesData[i].desc;
      leftText.innerHTML = weddingSlidesData[i].left;
      rightText.innerHTML = weddingSlidesData[i].right;
    }
  }
  loadContent(index);

  window.next = function () {
    const newIndex = (index + 1) % weddingSlidesData.length;
    rightImg.style.backgroundImage = `url(${weddingSlidesData[index].img})`;
    rightSide.classList.add("show");
    nextImg.src = weddingSlidesData[newIndex].img;
    current.style.transform = "translateX(-100%)";
    nextImg.style.transform = "translateX(100%)";
    setTimeout(() => nextImg.style.transform = "translateX(0)", 20);
    setTimeout(() => {
      index = newIndex;
      loadContent(index);
      current.style.transform = "translateX(0)";
      rightSide.classList.remove("show");
    }, 700);
  }

  window.prev = function () {
    const newIndex = (index - 1 + weddingSlidesData.length) % weddingSlidesData.length;
    leftImg.style.backgroundImage = `url(${weddingSlidesData[index].img})`;
    leftSide.classList.add("show");
    nextImg.src = weddingSlidesData[newIndex].img;
    current.style.transform = "translateX(100%)";
    nextImg.style.transform = "translateX(-100%)";
    setTimeout(() => nextImg.style.transform = "translateX(0)", 20);
    setTimeout(() => {
      index = newIndex;
      loadContent(index);
      current.style.transform = "translateX(0)";
      leftSide.classList.remove("show");
    }, 700);
  }

  // ------------------------------- DESTINATION WEDDING EVENT PAGE SLIDER -------------------------------
  const eventContainer = document.querySelector(".container");

  if (eventContainer) {
    const eventSlide = eventContainer.querySelector(".slide");
    const eventNext = eventContainer.querySelector(".next");
    const eventPrev = eventContainer.querySelector(".prev");

    if (eventSlide && eventNext && eventPrev) {
      eventNext.addEventListener("click", () => {
        const items = eventSlide.querySelectorAll(".item");
        eventSlide.appendChild(items[0]);
      });

      eventPrev.addEventListener("click", () => {
        const items = eventSlide.querySelectorAll(".item");
        eventSlide.prepend(items[items.length - 1]);
      });
    }
  }

}); // end of DOMContentLoaded
/* ================= HERO SLIDER ================= */
document.addEventListener("DOMContentLoaded", () => {

  const heroSlides = document.querySelectorAll(".slider-item");
  const heroNextBtn = document.querySelector(".hero-next-btn");
  const heroPrevBtn = document.querySelector(".hero-prev-btn");

  if (heroSlides.length) {
    let currentHeroSlide = 0;
    let slideInterval;
    const slideTime = 5000;

    function goToSlide(index) {
      heroSlides[currentHeroSlide].classList.remove("is-active");
      currentHeroSlide = (index + heroSlides.length) % heroSlides.length;
      heroSlides[currentHeroSlide].classList.add("is-active");
    }

    function nextSlide() { goToSlide(currentHeroSlide + 1); }
    function prevSlide() { goToSlide(currentHeroSlide - 1); }

    function startSlider() {
      slideInterval = setInterval(nextSlide, slideTime);
    }

    function resetSlider() {
      clearInterval(slideInterval);
      startSlider();
    }

    heroNextBtn?.addEventListener("click", () => {
      nextSlide();
      resetSlider();
    });

    heroPrevBtn?.addEventListener("click", () => {
      prevSlide();
      resetSlider();
    });

    startSlider(); // 
  }

  /* ================= AOS FIX ================= */
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      disable: false
    });

    window.addEventListener("load", () => {
      AOS.refreshHard(); //
    });
  }

});




