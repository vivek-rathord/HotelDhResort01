
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
  const overlay = document.getElementById("overlayMenu");
  const openBtn = document.getElementById("menuOpen");
  const closeBtn = document.getElementById("menuClose");
  const header = document.querySelector(".site-header");

  // Open menu
  openBtn.onclick = () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  // Close menu
  closeBtn.onclick = () => {
    closeOverlay();
  };

  // Reusable close function
  function closeOverlay() {
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 50);
  });

  //  AUTO CLOSE WHEN SCREEN BECOMES LARGE
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {   // desktop breakpoint
      closeOverlay();
    }
  });

// ------------------------------- BOOK ONLINE DROPDOWN -------------------------------
document.addEventListener("DOMContentLoaded", function () {

  const checkIn = document.getElementById("checkIn");
  const checkOut = document.getElementById("checkOut");
  const bookBtn = document.getElementById("bookBtn");

  function validateForm() {
    if (checkIn.value !== "" && checkOut.value !== "") {
      bookBtn.disabled = false;
      bookBtn.classList.remove("disabled-btn");
    } else {
      bookBtn.disabled = true;
      bookBtn.classList.add("disabled-btn");
    }
  }

  checkIn.addEventListener("change", validateForm);
  checkOut.addEventListener("change", validateForm);

  bookBtn.addEventListener("click", function (e) {
    e.preventDefault();
    
    // Even with disabled attribute, we still validate
    if (checkIn.value === "" || checkOut.value === "") {
      alert("Please fill both dates!");
      return;
    }

    if (checkOut.value <= checkIn.value) {
      alert("Check-Out must be after Check-In!");
      return;
    }

    // Redirect to google.com when valid
    window.location.href = "https://www.google.com";
  });

  // Initial validation on page load
  validateForm();

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
    { img: "./images/DSC09132.jpg", title: "MOUNTAIN WEDDING ", desc: "Exchange vows amidst serene mountains, misty valleys and breathtaking natural beauty.", left: "ROYAL PALACE<br>WEDDINGS", right: "BEACH<br>WEDDINGS" }
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
// code   by sahil
document.addEventListener("DOMContentLoaded", () => {
  const eventType = document.getElementById('eventType');
  const capacity = document.getElementById('capacity');
  const venueCards = document.querySelectorAll('.venue-image-card');
  const enquireBtns = document.querySelectorAll('.enquire-btn');

  if (eventType && capacity && venueCards.length) {

    function filterVenues() {
      const eventValue = eventType.value;
      const capacityValue = capacity.value ? Number(capacity.value) : null;

      venueCards.forEach(card => {
        const cardEvents = card.dataset.event.split(' ');
        const cardCapacity = Number(card.dataset.capacity);

        let eventMatch = true;
        let capacityMatch = true;

        // Event filter (can have multiple events)
        if (eventValue && !cardEvents.includes(eventValue)) {
          eventMatch = false;
        }

        // Capacity filter (less than or equal to selected capacity)
        if (capacityValue && cardCapacity > capacityValue) {
          capacityMatch = false;
        }

        // Show/hide card based on both filters
        if (eventMatch && capacityMatch) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.display = "none";
        }
      });
    }

    // Event listeners for filters
    eventType.addEventListener('change', filterVenues);
    capacity.addEventListener('change', filterVenues);

    // Event listener for Enquire buttons
    // enquireBtns.forEach(btn => {
    //   btn.addEventListener('click', function () {
    //     const venueName = this.closest('.venue-image-card').querySelector('h3').textContent;
    //     alert(`Please fill the contact form for: ${venueName}\nWe will contact you shortly!`);
    //   });
    // });

    // Initial filter
    filterVenues();
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



// ================= ROOM DETAILS =================
document.addEventListener("DOMContentLoaded", () => {

  const roomTitle = document.getElementById("roomTitle");
  const slideImage = document.getElementById("slideImage");

  //  Agar room-details page nahi hai → exit
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

  // slug check
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


// // room booking
// document.addEventListener("DOMContentLoaded", () => {
//   const checkIn = document.getElementById("checkin");
//   const checkOut = document.getElementById("checkout");

//   const today = new Date().toISOString().split("T")[0];

//   // Set minimum date for both
//   checkIn.min = today;
//   checkOut.min = today;

//   // When check-in changes
//   checkIn.addEventListener("change", () => {
//     checkOut.min = checkIn.value;

//     // Auto-fix checkout if earlier than check-in
//     if (checkOut.value && checkOut.value < checkIn.value) {
//       checkOut.value = checkIn.value;
//     }
//   });

//   // Optional: validate on checkout change
//   checkOut.addEventListener("change", () => {
//     if (checkOut.value < checkIn.value) {
//       alert("Check-out date cannot be before Check-in date");
//       checkOut.value = "";
//     }
//   });
// });
// ================= GALLERY PAGE (SAFE) =================
document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".editorial-filters button");
  const items = document.querySelectorAll(".editorial-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close");

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

  // IMAGE LIGHTBOX
  items.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (!img) return;

      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  // CLOSE BUTTON
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // CLOSE ON BACKGROUND CLICK
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

});




// rooms detail auto play slider 
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".room-slide");
  const dotsContainer = document.querySelector(".slider-dots");
  let currentSlide = 0;
  let slideInterval;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".slider-dots span");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
  }

  function startAutoplay() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
  }

  startAutoplay();
});

//  selected rooms
document.addEventListener("DOMContentLoaded", function () {
  const roomData = {
    "executive-room": {
      title: "Executive Room with Modern Comforts",
      features: "28 ROOMS / 1 BEDROOM / 3 GUESTS",
      desc: "A perfect blend of comfort and functionality, our Executive Rooms are ideal for business and leisure travelers. Enjoy modern interiors, premium amenities, and a relaxing atmosphere after a day exploring Dharamshala.",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32"
    },
    "executive-suite": {
      title: "Executive Suite with Spacious Living Area",
      features: "28 ROOMS / 1 BEDROOM / 3 GUESTS",
      desc: "Designed for those who prefer extra space and luxury, the Executive Suite offers a separate living area, elegant décor, and scenic views, making your stay both comfortable and memorable.",
      image: "./images/DSC00176-Edit.jpg"
    },
    "presidential-suite": {
      title: "Presidential Suite Offering Ultimate Luxury Stay",
      features: "18 ROOMS / 1 BEDROOM / 3 GUESTS",
      desc: "Experience the finest luxury in Dharamshala with our Presidential Suite. Featuring spacious living areas, premium furnishings, and unmatched comfort, it’s perfect for guests seeking an exclusive and indulgent stay.",
      image: "./images/luxuryRoom.jpg"
    },
    "twin-bed": {
      title: "Twin Bedded Room for Comfortable Shared Stay",
      features: "28 ROOMS / 1 BEDROOM / 3 GUESTS",
      desc: "Our Twin Bedded Rooms are ideal for friends or colleagues traveling together. With two comfortable beds, modern amenities, and a peaceful ambiance, these rooms ensure a restful stay.",
      image: "./images/DSC03083 copy.jpg"
    },
    "deluxe-room": {
      title: "Deluxe Room with Elegant Interior Design",
      features: "28 ROOMS / 1 BEDROOM / 3 GUESTS",
      desc: "Relax in style in our Deluxe Rooms, thoughtfully designed with warm interiors and modern comforts. Perfect for couples and families, these rooms offer a cozy retreat with beautiful surroundings.",
      image: "./images/DSC03289.jpg"
    }
  };

  const params = new URLSearchParams(window.location.search);
  const roomKey = params.get("room");
  const room = roomData[roomKey];

  if (!room) return;

  const roomDetails = document.getElementById("roomDetails");

  roomDetails.innerHTML = `
    <div class="room-content" data-aos="fade-up">
      <h2 class="room-heading">${room.title}</h2>

      <ul class="room-features">
        <li>${room.features}</li>
      </ul>

      <p class="room-description">${room.desc}</p>

      <a href="contact.html" class="discover-button rect-btn">
        BOOK now
      </a>
    </div>

    <div class="room-image">
      <div class="image-overlay-text">
        <img src="${room.image}" alt="${room.title}">
      </div>
    </div>
  `;
});
// if user select btns for rooms
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".room-button");
  if (btn) {
    const roomKey = btn.dataset.room;
    window.location.href = `room-details.html?room=${roomKey}`;
  }
});


// // selected room images slides
document.addEventListener("DOMContentLoaded", function () {

  let slideIndex = 0;
  let autoplayInterval;

  /* ================= ROOM IMAGES DATA ================= */
  const roomImages = {
    "executive-room": [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    ],
    "executive-suite": [
      "https://images.unslash.com/photo-1501117716987-c8e1ecb2101f",
      "https://images.usplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    ],
    "presidential-suite": [
      "https://imags.nsplash.com/photo-1505691723518-36a5ac3b2b8f",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unspash.com/photo-1501117716987-c8e1ecb2101f"
    ],
    "twin-bed": [
      "./images/DSC_4130.JPG",
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f",
      "https://images.unsplash.com/poto-1505691938895-1758d7feb511"
    ],
    "deluxe-room": [
      "https://imags.unsplsh.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplah.com/photo-1501117716987-c8e1ecb2101f"
    ]
  };

  /* ================= LOAD SLIDER ================= */
  function loadSelectedRoomSlider(roomKey) {

    const slider = document.querySelector(".selectedroomslider");
    if (!slider) return;

    const slidesEl = slider.querySelector(".slides");
    const dotsEl = slider.querySelector(".slider-dots");

    if (!roomImages[roomKey]) {
      roomKey = "executive-room";
    }

    slidesEl.innerHTML = "";
    dotsEl.innerHTML = "";

    roomImages[roomKey].forEach((img, index) => {

      slidesEl.innerHTML += `
        <div class="slide">
          <img src="${img}" alt="Room Image ${index + 1}">
        </div>
      `;

      dotsEl.innerHTML += `<span class="${index === 0 ? "active" : ""}"></span>`;
    });

    slideIndex = 0;
    updateSlider();
    startAutoplay();
  }

  /* ================= UPDATE SLIDER ================= */
  function updateSlider() {
    const slides = document.querySelector(".selectedroomslider .slides");
    const dots = document.querySelectorAll(".selectedroomslider .slider-dots span");

    if (!slides) return;

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === slideIndex);
    });
  }

  /* ================= AUTOPLAY ================= */
  function startAutoplay() {

    clearInterval(autoplayInterval);

    autoplayInterval = setInterval(() => {

      const totalSlides = document.querySelectorAll(".selectedroomslider .slide").length;

      if (totalSlides === 0) return;

      slideIndex = (slideIndex + 1) % totalSlides;

      updateSlider();

    }, 3000);
  }

  /* ================= LOAD BASED ON URL ================= */

  const params = new URLSearchParams(window.location.search);
  const roomKeyFromURL = params.get("room") || "executive-room";

  loadSelectedRoomSlider(roomKeyFromURL);

});


// faq
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    q.classList.toggle("active");
    const a = q.nextElementSibling;
    a.style.maxHeight ? a.style.maxHeight = null : a.style.maxHeight = a.scrollHeight + "px";
  });
});


