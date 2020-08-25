// let pageTop = document.getElementById("top");

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-170px";
  }
  prevScrollpos = currentScrollPos;
} 
