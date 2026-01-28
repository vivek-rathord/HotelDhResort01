
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
    { img: "./images/weedingimg1.jpg", title: "VOWS ON THE BEACH", desc: "Let the pristine sands, azure waters, breath-taking sunsets and our immaculate hospitality be the perfect companion for your dream wedding.", left: "ICONIC CITY<br>WEDDINGS", right: "MOUNTAIN<br>WEDDING VOWS" },
    { img: "./images/weedingimg2.jpg", title: "ROYAL PALACE WEDDINGS", desc: "Experience regal celebrations amidst heritage palaces, timeless architecture and royal grandeur.", left: "BEACH<br>WEDDINGS", right: "ICONIC CITY<br>WEDDINGS" },
    { img: "./images/DSC09132.jpg", title: "MOUNTAIN WEDDING VOWS", desc: "Exchange vows amidst serene mountains, misty valleys and breathtaking natural beauty.", left: "ROYAL PALACE<br>WEDDINGS", right: "BEACH<br>WEDDINGS" }
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



// venuue
document.addEventListener("DOMContentLoaded", () => {
  const eventType = document.getElementById('eventType');
  const seatingStyle = document.getElementById('seatingStyle');
  const capacity = document.getElementById('capacity');
  const cards = document.querySelectorAll('.venue-card');

  if (eventType && seatingStyle && capacity && cards.length) {

    function filterVenues() {
      const eventValue = eventType.value;
      const seatingValue = seatingStyle.value;
      const capacityValue = capacity.value ? Number(capacity.value) : null;

      cards.forEach(card => {
        const cardEvent = card.dataset.event;
        const cardSeating = card.dataset.seating;
        const cardCapacity = Number(card.dataset.capacity);

        let match = true;

        // Event filter
        if (eventValue && cardEvent !== eventValue) match = false;

        // Seating filter
        if (seatingValue && cardSeating !== seatingValue) match = false;

        // Capacity filter with ranges
        if (capacityValue) {
          if (capacityValue === 50 && cardCapacity > 50) match = false;
          else if (capacityValue === 100 && (cardCapacity < 50 || cardCapacity > 100)) match = false;
          else if (capacityValue === 300 && (cardCapacity < 100 || cardCapacity > 300)) match = false;
          else if (capacityValue === 500 && cardCapacity < 300) match = false;
        }

        card.style.display = match ? "flex" : "none";
      });
    }

    eventType.addEventListener('change', filterVenues);
    seatingStyle.addEventListener('change', filterVenues);
    capacity.addEventListener('change', filterVenues);

    filterVenues(); // initial filter
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const eventType = document.getElementById("eventType");
  const seatingStyle = document.getElementById("seatingStyle");
  const capacity = document.getElementById("capacity");
  const cards = document.querySelectorAll(".venue-card");

  function filterVenues() {
    const eventVal = eventType.value;
    const seatingVal = seatingStyle.value;
    const capacityVal = capacity.value;

    cards.forEach(card => {
      const cardEvent = card.dataset.event;
      const cardSeating = card.dataset.seating;
      const cardCapacity = Number(card.dataset.capacity);

      let match = true;

      if (eventVal && cardEvent !== eventVal) match = false;
      if (seatingVal && cardSeating !== seatingVal) match = false;

      if (capacityVal) {
        if (capacityVal === "50" && cardCapacity > 50) match = false;
        if (capacityVal === "100" && (cardCapacity < 50 || cardCapacity > 100)) match = false;
        if (capacityVal === "300" && (cardCapacity < 100 || cardCapacity > 300)) match = false;
        if (capacityVal === "500" && cardCapacity < 300) match = false;
      }

      card.classList.toggle("hide", !match);
    });
  }

  eventType.addEventListener("change", filterVenues);
  seatingStyle.addEventListener("change", filterVenues);
  capacity.addEventListener("change", filterVenues);
});

// event slider// ================= EVENT SLIDER (NO CONFLICT) =================
document.addEventListener("DOMContentLoaded", () => {

  const slider = document.querySelector(".event-slider");
  if (!slider) return;

  const track = slider.querySelector(".event-slider-track");
  const prevBtns = slider.querySelectorAll(".event-prev");
  const nextBtns = slider.querySelectorAll(".event-next");

  let slides = Array.from(track.children);
  let index = 0;
  let slidesToShow = 3;

  function getSlidesToShow() {
    return window.innerWidth < 992 ? 1 : 3;
  }

  function setupSlider() {
    slidesToShow = getSlidesToShow();
    track.innerHTML = "";

    slides.forEach(slide => track.appendChild(slide));

    slides.slice(0, slidesToShow).forEach(slide =>
      track.appendChild(slide.cloneNode(true))
    );

    slides.slice(-slidesToShow).forEach(slide =>
      track.insertBefore(slide.cloneNode(true), track.firstChild)
    );

    index = slidesToShow;
    move(false);
  }

  function move(animate = true) {
    const slideWidth = track.children[0].offsetWidth;
    track.style.transition = animate ? "0.5s ease" : "none";
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      index++;
      move();

      if (index >= track.children.length - slidesToShow) {
        setTimeout(() => {
          index = slidesToShow;
          move(false);
        }, 500);
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      index--;
      move();

      if (index <= 0) {
        setTimeout(() => {
          index = track.children.length - slidesToShow * 2;
          move(false);
        }, 500);
      }
    });
  });

  window.addEventListener("resize", setupSlider);
  setupSlider();
});

/* ================= BLOG DATA ================= */

const blogs = {
  "indian-wedding-malta": {
    title: "Indian Wedding In Malta",
    date: "March 12, 2026",
    image: "./images/DSC09810.jpg",
    content: `
      <p>Malta is one of the most beautiful destinations for Indian weddings.</p>
      <p>Luxury venues, sea views, and heritage locations make it unforgettable.</p>
    `
  },

  "indian-wedding-barcelona": {
    title: "Indian Wedding Venues In Barcelona",
    date: "March 18, 2026",
    image: "/images/DSC00496-HDR-Enhanced-NR-Edit.jpg",
    content: `
      <p>Barcelona offers a blend of modern architecture and rich traditions.</p>
      <p>Indian weddings here are vibrant and colorful.</p>
    `
  },

  "indian-wedding-switzerland": {
    title: "Indian Wedding In Switzerland",
    date: "March 25, 2026",
    image: "./images/hs.jpg",
    content: `
      <p>Switzerland offers snow-clad mountains and fairy-tale venues.</p>
      <p>Perfect for luxury Indian destination weddings.</p>
    `
  },

  "indian-wedding-spain": {
    title: "Indian Wedding In Spain",
    date: "April 2, 2026",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    content: `
      <p>Spain is famous for royal palaces and seaside venues.</p>
      <p>Indian weddings here feel elegant and grand.</p>
    `
  },

  "indian-wedding-bahrain": {
    title: "Indian Destination Wedding In Bahrain",
    date: "April 8, 2026",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    content: `
      <p>Bahrain offers luxury hotels and desert charm.</p>
      <p>A premium destination for intimate Indian weddings.</p>
    `
  },

  "indian-wedding-france": {
    title: "Indian Wedding In France",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    content: `
      <p>France brings romance, vineyards, and castles.</p>
      <p>Ideal for high-end Indian destination weddings.</p>
    `
  },

  "luxury-indian-wedding": {
    title: "Luxury Indian Wedding",
    date: "April 20, 2026",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    content: `
      <p>Luxury Indian weddings redefine elegance.</p>
      <p>From decor to hospitality, everything is world-class.</p>
    `
  },

  "royal-indian-wedding": {
    title: "Royal Indian Wedding",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    content: `
      <p>Royal weddings are about grandeur and heritage.</p>
      <p>Perfect for couples seeking a majestic celebration.</p>
    `
  }
};

/* ================= BLOG DETAIL LOGIC ================= */

document.addEventListener("DOMContentLoaded", function () {

  const blogTitle = document.getElementById("blogTitle");
  if (!blogTitle) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (!slug || !blogs[slug]) {
    blogTitle.innerText = "Blog not found";
    return;
  }

  const blog = blogs[slug];

  document.getElementById("blogTitle").innerText = blog.title;
  document.getElementById("blogDate").innerText = blog.date;
  document.getElementById("blogImage").src = blog.image;
  document.getElementById("blogContent").innerHTML = blog.content;

});


// ROOM DETAILS
// ================= ROOM DETAILS (SAFE VERSION) =================
document.addEventListener("DOMContentLoaded", () => {

  const roomTitle = document.getElementById("roomTitle");
  const slideImage = document.getElementById("slideImage");

  // ❗ Agar room-details page nahi hai → exit
  if (!roomTitle || !slideImage) return;

  const roomsData = {
    "double-suite-room": {
      title: "Double Suite Room",
      images: [
        "./images/DSC03289.jpg",
        "./images/DSC00176-Edit.jpg",
        "./images/DSC03083 copy.jpg"
      ],
      description: "Luxury double suite room with king bed, balcony and premium amenities.",
      price: "$560 / Night"
    },

    "delux-family-room": {
      title: "Delux Family Room",
      images: [
        "./images/DSC00176-Edit.jpg",
        "./images/DSC03289.jpg",
        "./images/DSC03289.jpg"
      ],
      description: "Spacious family room with 2 king beds, perfect for families.",
      price: "$560 / Night"
    },

    "superior-bed-room": {
      title: "Superior Bed Room",
      images: [
        "./images/DSC03083 copy.jpg",
        "./images/DSC03289.jpg",
        "./images/DSC03289.jpg"
      ],
      description: "Elegant superior room with modern interiors and comfort.",
      price: "$560 / Night"
    }
  };

  const params = new URLSearchParams(window.location.search);
  const roomSlug = params.get("room");

  // ❗ slug check
  if (!roomSlug || !roomsData[roomSlug]) {
    roomTitle.innerText = "Room not found";
    return;
  }

  const room = roomsData[roomSlug];

  // TEXT
  roomTitle.innerText = room.title;
  document.getElementById("roomDescription").innerText = room.description;
  document.getElementById("roomPrice").innerText = room.price;

  // SLIDER
  let currentIndex = 0;
  slideImage.src = room.images[currentIndex];

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % room.images.length;
      slideImage.src = room.images[currentIndex];
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + room.images.length) % room.images.length;
      slideImage.src = room.images[currentIndex];
    });
  }
});


// room booking
 document.addEventListener("DOMContentLoaded", () => {
    const checkIn = document.getElementById("checkin");
    const checkOut = document.getElementById("checkout");

    const today = new Date().toISOString().split("T")[0];

    // Set minimum date for both
    checkIn.min = today;
    checkOut.min = today;

    // When check-in changes
    checkIn.addEventListener("change", () => {
      checkOut.min = checkIn.value;

      // Auto-fix checkout if earlier than check-in
      if (checkOut.value && checkOut.value < checkIn.value) {
        checkOut.value = checkIn.value;
      }
    });

    // Optional: validate on checkout change
    checkOut.addEventListener("change", () => {
      if (checkOut.value < checkIn.value) {
        alert("Check-out date cannot be before Check-in date");
        checkOut.value = "";
      }
    });
  });
// ================= GALLERY PAGE (SAFE) =================
document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".gallery-filters button");
  const items = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close");

  // ❗ Agar gallery page nahi hai → exit
  if (!buttons.length || !items.length || !lightbox) return;

  // FILTERS
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      items.forEach(item => {
        item.style.display =
          filter === "all" || item.classList.contains(filter)
            ? "block"
            : "none";
      });
    });
  });

  // LIGHTBOX OPEN
  items.forEach(item => {
    item.addEventListener("click", () => {
      lightboxImg.src = item.querySelector("img").src;
      lightbox.style.display = "flex";
    });
  });

  // CLOSE BUTTON
  closeBtn?.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // CLICK OUTSIDE
  lightbox.addEventListener("click", e => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });

  // ESC KEY
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  });

});

