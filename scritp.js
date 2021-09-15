const prev = document.getElementById("prev");
const next = document.getElementById("next");
const sliderCards = document.querySelectorAll(".slider-card");
const visibleSliderCount = Math.ceil(sliderCards.length / 3);
console.log(visibleSliderCount);
let l = 0;
const movePerv = 32;
const maxMove = (sliderCards.length - 3) * 32;
console.log(maxMove);
function enable(arrow) {
  arrow.classList.remove("disable");
}
function disable(arrow) {
  arrow.classList.add("disable");
}
function nextSlide() {
  enable(prev);
  l = l + movePerv;
  for (const sliderCard of sliderCards) {
    if (l > maxMove) {
      l = l - movePerv;
    }
    sliderCard.style.left = `-${l}%`;
  }
  if (l >= maxMove) {
    disable(next);
  } else {
    enable(prev);
  }
}
function prevSlide() {
  enable(next);
  l = l - movePerv;
  if (l <= 0) {
    l = 0;
  }
  for (const sliderCard of sliderCards) {
    if (visibleSliderCount == 1) {
      l = l - movePerv;
    }
    sliderCard.style.left = `-${l}%`;
  }
  if (l <= 0) {
    disable(prev);
  } else {
    enable(next);
  }
}

sliderCards.forEach((sliderCard) => {
  sliderCard.addEventListener("click", function () {
    sliderCards.forEach((element) => {
      element.classList.remove("active");
    });
    this.classList.add("active");
  });
  next.addEventListener("click", () => {
    nextSlide();
    sliderCard.classList.remove("active");
  });
  prev.addEventListener("click", () => {
    prevSlide();
    sliderCard.classList.remove("active");
  });
});
