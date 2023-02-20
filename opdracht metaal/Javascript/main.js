let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#main-body").classList.add(dark)
});

document.getElementById("light-dark-btn").addEventListener("click", () => {
  document.querySelector("#main-body").classList.toggle(dark)
  document.querySelector("#main-body").classList.toggle(light)
});

let isDark = 0;
const mainSelector = document.getElementById("main-body");

function setLightDark() {
  console.log("test")
  if (!isDark) {
      mainSelector.style.backgroundcolor = "#999999";
      isDark = 1;
      console.log("test1")
  } else {
      mainSelector.style.backgroundcolor = "#fcfcfc";
      isDark = 0;
      console.log("test2")
  }
}