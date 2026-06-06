let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
    // Hide all slides
    slides.forEach(function (slide) {
        slide.classList.remove("show");
    });

    // Remove active class from all dots
    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    // Show the current slide
    slides[index].classList.add("show");

    // Highlight the corresponding dot
    dots[index].classList.add("active");
}

// Initialize first slide and dot
showSlide(currentSlide);

nextBtn.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener('click', function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Add click functionality to indicator dots
dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
        currentSlide = parseInt(this.getAttribute('data-slide'));
        showSlide(currentSlide);
    });
});