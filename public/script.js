const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 80}%)`;
}

prevBtn.addEventListener('click', () => {
    console.log(currentIndex)
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentIndex;
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSliderPosition();
});