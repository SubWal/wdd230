// store the selected elements that we going to use.

const mainnav = document.querySelector('.hamburger')

const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slideshow-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active-slide', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Initialize the first slide
    showSlide(currentSlide);

    // Set interval for slideshow
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    let currentHeroImage = 0;
    const heroImages = document.querySelectorAll('.hero-image');
    const totalHeroImages = heroImages.length;

    function showHeroImage(index) {
        heroImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextHeroImage() {
        currentHeroImage = (currentHeroImage + 1) % totalHeroImages;
        showHeroImage(currentHeroImage);
    }

    // Initialize the first hero image
    showHeroImage(currentHeroImage);

    // Set interval for hero image slideshow
    setInterval(nextHeroImage, 5000); // Change image every 5 seconds
});
