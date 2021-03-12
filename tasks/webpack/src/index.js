import renderSearch from './modules/search/index'
import renderWeather from './modules/weather/index'
import './style.css'

const root = document.getElementById('root')
root.innerHTML = `
  <header class="header">
    <q>Wherever you go, no matter what the weather, always bring your own sunshine.</q>
  </header>
  `

async function getWeather(location) {
  const response = await fetch('http://api.weatherstack.com/current'
    + '?access_key=13cec5d636a0fbdb15c0f98d61ad1451'
    + `&query=${location.city}, ${location.country}`)

  let data
  try {
    data = response.json()
  } catch (error) {
    data = null
  }
  return data
}

async function onCallSearch(location) {
  const data = await getWeather(location)
  renderWeather(root, data)
}

window.onload = () => {
  renderSearch(root, onCallSearch)
}
