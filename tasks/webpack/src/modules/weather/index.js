import './style.css'
import { getWeatherDescription, setBackgroundImg } from './service'

const mainContent = document.createElement('div')
mainContent.className = 'main-content'
mainContent.innerHTML = `
    <div class="location">Location</div>

    <div class="info-about-weather">
      <div class="main-info">
        <div class="temperature">Temperature</div>
        <div class="weather-description">Description</div>
        <div class="feels-like">Feels like</div>
      </div>

      <ul class="other-info">
        <li>
          <div class="other-info__title">Wind direction</div>
          <div class="wind-direction">Wind direction</div>
        </li>

        <li>
          <div class="other-info__title">Wind speed</div>
          <div class="wind-speed">Wind speed</div>
        </li>

        <li>
          <div class="other-info__title">Pressure</div>
          <div class="pressure">Pressure</div>
        </li>
      </ul>
    </div>
    `

const locationName = mainContent.querySelector('.location')
const infoBlock = mainContent.querySelector('.info-about-weather')
const temperature = mainContent.querySelector('.temperature')
const description = mainContent.querySelector('.weather-description')
const feelsLike = mainContent.querySelector('.feels-like')
const windDirection = mainContent.querySelector('.wind-direction')
const windSpeed = mainContent.querySelector('.wind-speed')
const pressure = mainContent.querySelector('.pressure')

function renderWeather(parentEl, data) {
  parentEl.appendChild(mainContent)

  if (data !== null) {
    locationName.textContent = `${data.location.name}, ${data.location.country}`
    temperature.textContent = `${data.current.temperature}°C`
    feelsLike.textContent = `Feels like: ${data.current.feelslike}°C`
    windDirection.textContent = `${data.current.wind_dir}`
    windSpeed.textContent = `${data.current.wind_speed} km/h`
    pressure.textContent = `${data.current.pressure} MB`

    getWeatherDescription(description, data.current.weather_descriptions)
    setBackgroundImg(data.current.weather_descriptions, infoBlock)
  }
}

export default renderWeather
