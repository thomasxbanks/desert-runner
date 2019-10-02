'use strict';

class animation {
  constructor(options) {
    this.framerate = options.framesPerSecond ? (1000 / options.framesPerSecond) : 40;
    this.wrapper = document.querySelector(options.wrapper || '.stop-motion_animation');
    this.slides = [...this.wrapper.querySelectorAll('img')];
    this.slidesCount = this.slides.length;
  }

  init(){
    this.slides.forEach((slide) => {
      if (slide.complete) {
        this.slideLoaded();
      } else {
        slide.addEventListener('load', this.slideLoaded);
      }
    });
  }

  startAnimation() {
    this.wrapper.dataset.active = 'true';
    setInterval(() => {
      const el = this.wrapper.querySelector('img');
      this.wrapper.insertAdjacentElement('beforeend', el);
    }, this.framerate);
  }

  slideLoaded() {
    this.slidesCount = this.slidesCount === 0 ? 0 : this.slidesCount - 1;
    if (this.slidesCount === 0) {
      this.startAnimation();
    }
  }
}

/**
 * @constant {Function} - Adds zeros to the beginning of a given number up to the given size
 * @param {Number} number - The given number
 * @param {Number} size - The size to pad with zero until
 */
const padWithZero = (number, size) => {
  var s = number+"";
  while (s.length < size) s = "0" + s;
  return s;
};

const animationWrapper = document.querySelector('.stop-motion_animation');
const count = 12; // How many slides there are

for (let i = 0; i < count; i++) {
  animationWrapper.innerHTML += `<img src="images/Slide_${ padWithZero(i + 1, 2) }.gif" />`;
}

window.addEventListener('load', () => {
  let options = { framesPerSecond: 25 };
  const StopMotion = new animation(options);
  StopMotion.init();
});
