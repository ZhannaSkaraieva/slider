const imgArray = ['large_2021.jpg', 'large_2025.jpg', 'large_202500.jpg', 'large_202505.jpg', 'large_202507.jpg'];// массив с изображениями


const slide = document.querySelector('.slide');
const indicators = document.querySelector('.bottom');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
let length = imgArray.length;

let slideIndex = 1;
const imageWidth = 500;
let autoslideInterval;
let isAutoPlay = false;

document.addEventListener('DOMContentLoaded', loadImages);
function loadImages() {
    for (let i = 0; i < imgArray.length; i++) {
        const img = document.createElement('img');
        img.className = 'image';
        img.src = imgArray[i];
        slide.appendChild(img);
    };
}

for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = 'buttom';
    buttons.appendChild(div);
};

const buttons = document.querySelectorAll('.buttom');
buttons[0].style.backgroundColor = 'white';

const resetBq = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent";
    });
};


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        resetBq();
        button.style.transform = translateY(-${index * imageWidth}px);
        slideIndex = index + 1;
        buttons.slide.backgroundColor = 'white';
    });
});
    
const changeColor = () => {
    resetBq();
    buttons[slideIndex - 1].style.backgroundColor = 'white';
}

const nextSlide = () => {
    slide.style.transform = translateX(-${(slideIndex - 1) * imageWidth}px);
}