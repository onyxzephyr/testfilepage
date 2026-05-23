// --- BROWSER POSITION OVERRIDE ---
// Forces the window to start at the top right when the page loads
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

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

// Function to move the slider to the correct slide
function updateSlider() {
    slidesTrack.style.transform = `translateX(-${slideIndex * 33.3333}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

// Function to go to the next slide automatically
function nextSlide() {
    slideIndex = (slideIndex + 1) % dots.length;
    updateSlider();
}

// Function triggered when you manually click a dot
function currentSlide(index) {
    slideIndex = index;
    updateSlider();
    resetTimer(); 
}

// Function to start the 5-second automatic sliding
function startTimer() {
    slideInterval = setInterval(nextSlide, 5000); 
}

// Function to reset the timer when someone interacts with the dots
function resetTimer() {
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