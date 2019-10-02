import animation from './animation'
import { padWithZero } from './utils'


const animationWrapper = document.querySelector('.stop-motion_animation')
const count = 12 // How many slides there are

for (let i = 0; i < count; i++) {
  animationWrapper.innerHTML += `<img src="images/Slide_${ padWithZero(i + 1, 2) }.gif" />`
}

window.addEventListener('load', () => {
  let options = { framesPerSecond: 25 }
  const StopMotion = new animation(options)
  StopMotion.init()
})