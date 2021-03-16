import cloud from './img/cloud.jpg'
import rain from './img/rain.jpg'
import sun from './img/sun.jpg'
import overcast from './img/overcast.jpg'
import clear from './img/clear.jpg'
import mist from './img/mist.jpg'
import snow from './img/snow.jpg'
import wind from './img/wind.jpg'
import frost from './img/frost.jpg'
import mainBackground from './img/main-background.jpg'

function getWeatherDescription(el, prop) {
  const element = el
  element.textContent = (prop.length === 2)
    ? `${prop[0]}, ${prop[1]}`
    : `${prop[0]}`
}

function setBackgroundImg(prop, place) {
  const element = place
  const str = prop[0].toLowerCase()

  switch (true) {
    case str.includes('cloud'):
      element.style.backgroundImage = `url(${cloud})`
      break
    case str.includes('rain') || str.includes('drizzle'):
      element.style.backgroundImage = `url(${rain})`
      break
    case str.includes('sun'):
      element.style.backgroundImage = `url(${sun})`
      break
    case str.includes('overcast'):
      element.style.backgroundImage = `url(${overcast})`
      break
    case str.includes('clear'):
      element.style.backgroundImage = `url(${clear})`
      break
    case str.includes('mist'):
      element.style.backgroundImage = `url(${mist})`
      break
    case str.includes('snow'):
      element.style.backgroundImage = `url(${snow})`
      break
    case str.includes('wind'):
      element.style.backgroundImage = `url(${wind})`
      break
    case str.includes('frost'):
      element.style.backgroundImage = `url(${frost})`
      break
    default:
      element.style.backgroundImage = `url(${mainBackground})`
  }
}

export { getWeatherDescription, setBackgroundImg }
