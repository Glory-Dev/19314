const heading = document.querySelector(".main-heading");
const processSection = document.querySelector(".process");
const teamSection = document.querySelector(".team");
const teamMembers = document.querySelectorAll(".team .team-row .member");
const documentsSection = document.querySelector(".documents.section");
const graphBox = document.querySelector(".documents .chartCard");

window.addEventListener("scroll", function () {
  if (scrollY >= processSection.scrollHeight - 200) processSection.classList.add("active-animate");
  if (scrollY >= teamSection.scrollHeight + 1000) teamMembers.forEach((e) => e.classList.add("active-animate"));
  if (scrollY >= documentsSection.scrollHeight) graphBox.classList.add("active-animate")
});
window.addEventListener("load", function () {
  heading.classList.add("active-animate");
});

// Slides in poster

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

document.querySelector(`.documents .box .slides .controller .next`).addEventListener("click", function () {
  if (slideIndex == 7) {
    document.querySelector(`.documents .box .chartCard`).style.display = "none";
    document.querySelector(`.documents .box .slides`).style.flexBasis = "100%"
  } else {
    document.querySelector(`.documents .box .chartCard`).style.display = "block";
    document.querySelector(`.documents .box .slides`).style.flexBasis = "47%"
  }
})
document.querySelector(`.documents .box .slides .controller .prev`).addEventListener("click", function () {
  if (slideIndex == 7) {
    document.querySelector(`.documents .box .chartCard`).style.display = "none";
    document.querySelector(`.documents .box .slides`).style.flexBasis = "100%"
  } else {
    document.querySelector(`.documents .box .chartCard`).style.display = "block";
    document.querySelector(`.documents .box .slides`).style.flexBasis = "47%"
  }
})

