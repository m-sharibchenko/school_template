const form = document.querySelector('.form')
const city = form.querySelector('.city')
const country = form.querySelector('.country')

const infoBlock = document.querySelector('.info-about-weather')
const locationName = document.querySelector('.location')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.weather-description')
const feelsLike = document.querySelector('.feels-like')
const windDirection = document.querySelector('.wind-direction')
const windSpeed = document.querySelector('.wind-speed')
const pressure = document.querySelector('.pressure')

const startLocation = {
  city: 'Minsk',
  country: 'Belarus',
}

function getWeatherDescription(prop) {
  description.textContent = (prop.length === 2)
    ? `${prop[0]}, ${prop[1]}`
    : `${prop[0]}`
}

function setBackgroundImg(prop, place) {
  const element = place
  const str = prop[0].toLowerCase()
  switch (true) {
    case str.includes('cloud'):
      element.style.backgroundImage = 'url("img/cloud.jpg")'
      break
    case str.includes('rain'):
      element.style.backgroundImage = 'url("img/rain.jpg")'
      break
    case str.includes('sun'):
      element.style.backgroundImage = 'url("img/sun.jpg")'
      break
    case str.includes('overcast'):
      element.style.backgroundImage = 'url("img/overcast.jpg")'
      break
    case str.includes('clear'):
      element.style.backgroundImage = 'url("img/clear.jpg")'
      break
    case str.includes('mist'):
      element.style.backgroundImage = 'url("img/mist.jpg")'
      break
    case str.includes('snow'):
      element.style.backgroundImage = 'url("img/snow.jpg")'
      break
    case str.includes('wind'):
      element.style.backgroundImage = 'url("img/wind.jpg")'
      break
    case str.includes('frost'):
      element.style.backgroundImage = 'url("img/frost.jpg")'
      break
    default:
      element.style.backgroundImage = 'url("img/main-background.jpg")'
  }
}

async function getWeather(cityName, countryName) {
  const response = await fetch('http://api.weatherstack.com/current'
    + '?access_key=13cec5d636a0fbdb15c0f98d61ad1451'
    + `&query=${cityName}, ${countryName}`)
  let data
  try {
    data = response.json()
  } catch (error) {
    data = null
    console.log(error)
  }
  return data
}

async function showWeather(cityName, countryName) {
  const result = await getWeather(cityName, countryName)
  if (result !== null) {
    locationName.textContent = `${result.location.name}, ${result.location.country}`
    temperature.textContent = `${result.current.temperature}°C`
    feelsLike.textContent = `Feels like: ${result.current.feelslike}°C`
    windDirection.textContent = `${result.current.wind_dir}`
    windSpeed.textContent = `${result.current.wind_speed} km/h`
    pressure.textContent = `${result.current.pressure} MB`
    getWeatherDescription(result.current.weather_descriptions)
    setBackgroundImg(result.current.weather_descriptions, infoBlock)
  }
}

window.onload = () => {
  showWeather(startLocation.city, startLocation.country)
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault()
  showWeather(city.value, country.value)
  form.reset()
})
