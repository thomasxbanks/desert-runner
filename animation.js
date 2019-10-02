export default class {
  constructor(options) {
    this.framerate = options.framesPerSecond ? (1000 / options.framesPerSecond) : 40
    this.wrapper = document.querySelector(options.wrapper || '.stop-motion_animation')
    this.slides = [...this.wrapper.querySelectorAll('img')]
    this.slidesCount = this.slides.length
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