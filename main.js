// Hides header
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    // document.getElementById("mySidenav").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-170px";
    // document.getElementById("mySidenav").style.top = "-170px";
  }
  prevScrollpos = currentScrollPos;
} 

// Mobile navbar
function openNav() {
  document.getElementById("sidepanel").style.width = "50%";
  document.getElementById("overlaypanel").style.width = "100%";
  document.getElementById("sidepanel").style.right = 0;
  document.getElementById("overlaypanel").style.right = 0;
  // document.getElementById("sidepanel").style.display = "flex";
  // document.getElementById("overlaypanel").style.display = "fixed";
}

function closeNav() {
  // document.getElementById("sidepanel").style.width = "0";
  // document.getElementById("overlaypanel").style.width = "0";
  document.getElementById("sidepanel").style.right = "100%";
  document.getElementById("overlaypanel").style.right = "100%";
  // document.getElementById("sidepanel").style.display = "none";
  // document.getElementById("overlaypanel").style.display = "none";
}

// Slideshow test
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

// For collapsible buttons
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}