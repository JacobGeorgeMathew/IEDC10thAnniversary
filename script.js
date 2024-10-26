
function opentab(tabName){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-contents");
  for(i=0; i<tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-links");
  for(i=0; i<tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active-link", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active-link";
}
 var sidemenu = document.getElementById("sidemenu");

 function openmenu(){
  sidemenu.style.right = "0";
 }

 function closemenu(){
  sidemenu.style.right = "-200px";
 }

const swiper = new Swiper('.slider_wrapper', {
   
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     breakpoints: {
        0: {
            slidesPerView: 1,
            //spaceBetween: 10,
            },
            768: {
            slidesPerView: 2,
            },
            1024: {
            slidesPerView: 3,
            }
     }
   
  });

  let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

// Countdown Timer
const eventDate = new Date("December 31, 2024 23:59:59").getTime(); 

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}


setInterval(updateCountdown, 1000);
