document.addEventListener("DOMContentLoaded", () => {
  // NAVBAR SCROLL
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      link.nextElementSibling.classList.toggle("show");
    }
  });
});


  // HAMBURGER MENU
  const hamburger = document.querySelector(".hamburger");
  const navlinks = document.querySelector(".navlinks");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
  });

  // BOOK ONLINE DROPDOWN
  let rooms = 3, adult = 1, child = 0;
  window.toggleDropdown = function(id) {
    document.querySelectorAll('.dropdown-menu').forEach(d => {
      if (d.id !== id) d.style.display = 'none';
    });
    const el = document.getElementById(id);
    if(el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
  }

  window.changeCount = function(type, value){
    if(type === 'rooms'){ rooms = Math.max(1, rooms + value); document.getElementById('rooms').innerText = rooms; document.getElementById('roomText').innerText = `${rooms} Room`; }
    if(type === 'adult'){ adult = Math.max(1, adult + value); document.getElementById('adult').innerText = adult; }
    if(type === 'child'){ child = Math.max(0, child + value); document.getElementById('child').innerText = child; }
    document.getElementById('guestText').innerText = `${adult} Adult, ${child} Child`;
  }

  document.addEventListener('click', e => {
    if(!e.target.closest('.dropdown')){
      document.querySelectorAll('.dropdown-menu').forEach(d=>d.style.display='none');
    }
  });

  // CONTACT FORM
  if(window.emailjs){
    emailjs.init("YOUR_PUBLIC_KEY"); // replace with your key
    const form = document.getElementById("contactForm");
    if(form){
      form.addEventListener("submit", function(e){
        e.preventDefault();
        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
          .then(()=> { alert("Message sent successfully!"); form.reset(); },
                err=> alert("FAILED... " + err.text));
      });
    }
  }

  // DESTINATION WEDDING SLIDER
  const slides = [
    { img:"./images/slide1.webp", title:"VOWS ON THE BEACH", desc:"Let the pristine sands, azure waters, breath-taking sunsets and our immaculate hospitality be the perfect companion for your dream wedding.", left:"ICONIC CITY<br>WEDDINGS", right:"MOUNTAIN<br>WEDDING VOWS" },
    { img:"./images/w2.jpeg", title:"ROYAL PALACE WEDDINGS", desc:"Experience regal celebrations amidst heritage palaces, timeless architecture and royal grandeur.", left:"BEACH<br>WEDDINGS", right:"ICONIC CITY<br>WEDDINGS" },
    { img:"./images/w1.jpg", title:"MOUNTAIN WEDDING VOWS", desc:"Exchange vows amidst serene mountains, misty valleys and breathtaking natural beauty.", left:"ROYAL PALACE<br>WEDDINGS", right:"BEACH<br>WEDDINGS" }
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

  function loadContent(i){
    if(current){ current.src = slides[i].img; title.innerHTML = slides[i].title; desc.innerHTML = slides[i].desc; leftText.innerHTML = slides[i].left; rightText.innerHTML = slides[i].right; }
  }
  loadContent(index);

  window.next = function(){
    const newIndex = (index+1) % slides.length;
    rightImg.style.backgroundImage = `url(${slides[index].img})`;
    rightSide.classList.add("show");
    nextImg.src = slides[newIndex].img;
    current.style.transform = "translateX(-100%)";
    nextImg.style.transform = "translateX(100%)";
    setTimeout(()=> nextImg.style.transform = "translateX(0)", 20);
    setTimeout(()=>{
      index = newIndex;
      loadContent(index);
      current.style.transform = "translateX(0)";
      rightSide.classList.remove("show");
    },700);
  }

  window.prev = function(){
    const newIndex = (index-1+slides.length) % slides.length;
    leftImg.style.backgroundImage = `url(${slides[index].img})`;
    leftSide.classList.add("show");
    nextImg.src = slides[newIndex].img;
    current.style.transform = "translateX(100%)";
    nextImg.style.transform = "translateX(-100%)";
    setTimeout(()=> nextImg.style.transform = "translateX(0)",20);
    setTimeout(()=>{
      index = newIndex;
      loadContent(index);
      current.style.transform = "translateX(0)";
      leftSide.classList.remove("show");
    },700);
  }

  
// ------------------------------- Destination weeding event page slider-------------------
const eventContainer = document.querySelector(".container");
const eventSlide = eventContainer.querySelector(".slide");

const eventNext = eventContainer.querySelector(".next");
const eventPrev = eventContainer.querySelector(".prev");

eventNext.addEventListener("click", () => {
  const items = eventSlide.querySelectorAll(".item");
  eventSlide.appendChild(items[0]);
});

eventPrev.addEventListener("click", () => {
  const items = eventSlide.querySelectorAll(".item");
  eventSlide.prepend(items[items.length - 1]);
});
});
