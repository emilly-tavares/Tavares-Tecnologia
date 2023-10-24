const slides = document.querySelectorAll('#slider li');
let currentSlide = 0;
let animation = true;

slides[currentSlide].style.display = 'block';

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
    console.log(currentSlide);
}

function prevSlide(){
  slides[currentSlide].style.display = 'none';
  currentSlide = currentSlide - 1;

  if(currentSlide < 0){
    currentSlide = 2;
  }
    slides[currentSlide].style.display = 'block';

    console.log(currentSlide);
}

/*
function animationFalse(){

    animation = false;
}

function animationTrue(){

    animation = true;
}


if(animation == true){
    setInterval(nextSlide, 1000);
}*/



    




