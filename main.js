const slide = document.querySelector('.slide');
    const images = document.querySelectorAll('.slide .image');
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');
    const buttons = document.querySelectorAll('.button');
    const imageWidth = 500;
    let slideIndex = 0;

    function showSlide(index) {
      slide.style.transform = `translateX(-${index * imageWidth}px)`;
      buttons.forEach(btn => btn.style.backgroundColor = 'transparent');
      buttons[index].style.backgroundColor = 'white';
    }

    rightArrow.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % images.length;
      showSlide(slideIndex);
    });

    leftArrow.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + images.length) % images.length;
      showSlide(slideIndex);
    });

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        slideIndex = index;
        showSlide(slideIndex);
      });
    });

    // начальная инициализация
    showSlide(slideIndex);