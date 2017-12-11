const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
const progressBar = document.getElementById('progress-bar');

let currentSlide = 0;

function showSlide(n) {

    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    progressBar.style.width = n + "0%";
    progressBar.innerHTML = n + "0%";

    if(currentSlide===0) {
        previousButton.style.display = 'none';
    } else{
        previousButton.style.display = 'inline-block';
    }

    if(currentSlide===slides.length-1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

showSlide(0);

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
