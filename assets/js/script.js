const menu_toggle = document.querySelector(".navbar-toggler");
const menu_close = document.querySelector(".sidebar .close-sidebar");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

menu_toggle.addEventListener("click", () => {
  menu_toggle.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
  sidebar.style.display = "block";
  body.style.overflow = "hidden";
});
menu_close.addEventListener("click", () => {
  sidebar.style.display = "none";
  body.style.overflow = "scroll";
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $("#btn").addClass("show");
  } else {
    $("#btn").removeClass("show");
  }
});

$("#moveBtn").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;
//////////////////////////////////////////
let yearVersion = document.getElementById("year-version");
let monthVersion = document.getElementById("month-version");
let trailVersion = document.getElementById("trail-version");
let monthToggle = document.querySelector(".price-model-section .label-on");
let yearToggle = document.querySelector(".price-model-section .label-off");
let toggleButton = document.querySelector(".price-model-section .slider");
const beforePseudoElementStyle = getComputedStyle(toggleButton, "::before");
const leftValue = beforePseudoElementStyle.getPropertyValue("left");
const checkbox = document.getElementById("toggleSwitch");

let cards = document.querySelectorAll(
  ".price-model-section .price-cards .owl-three .single-card"
);

monthVersion.addEventListener("click", (e) => {
  cards.forEach((element) => {
    element.classList.remove("active");
  });

  monthVersion.classList.add("active");

});
yearVersion.addEventListener("click", (e) => {
  cards.forEach((element) => {
    element.classList.remove("active");
  });
  yearVersion.classList.add("active");
});
trailVersion.addEventListener("click", (e) => {
  cards.forEach((element) => {
    element.classList.remove("active");
  });
  trailVersion.classList.add("active");
});

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    monthToggle.style.color = "#fff";
    yearToggle.style.color = "#626262";
    cards.forEach((element) => {
      element.classList.remove("active");
    });
    monthVersion.classList.add("active");
    const newContent = "0px";
    toggleButton.style.setProperty("--before-left", newContent);
  } else {
    monthToggle.style.color = "#626262";
    yearToggle.style.color = "#fff";
    cards.forEach((element) => {
      element.classList.remove("active");
    });
    yearVersion.classList.add("active");
  }
});
