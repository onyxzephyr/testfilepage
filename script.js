// --- FORCE SCROLL TO TOP ON LOAD ---
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 20); // Tiny delay to defeat aggressive mobile browser memories
});

// --- SCROLLING HEADER LOGIC ---
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- IMAGE SLIDER LOGIC ---
const slidesTrack = document.getElementById('slidesTrack');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;
let slideInterval;

function updateSlider() {
    slidesTrack.style.transform = `translateX(-${slideIndex * 33.3333}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % dots.length;
    updateSlider();
}

function currentSlide(index) {
    slideIndex = index;
    updateSlider();
    resetTimer(); 
}

function startTimer() {
    slideInterval = setInterval(nextSlide, 5000); 
}

function __resetTimer() {
    clearInterval(slideInterval);
    startTimer();
}

// --- ATTACH CLICK EVENTS TO DOTS ---
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index);
    });
});

// Start the timer when the page loads!
startTimer();