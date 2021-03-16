import './style.css'

const form = document.createElement('form')
form.className = 'form'
form.innerHTML = `
    <form class="form" name="form">
        <label class="form__label">
            <input type="text" name="city" class="form__input city" placeholder="Enter your city here...">
        </label>

        <label class="form__label">
            <input type="text" name="city" class="form__input country" placeholder="Enter your country here...">
        </label>

        <button type="submit" class="form__btn-submit">Check the weather</button>
    </form> 
    `

const countryName = form.querySelector('.country')
const cityName = form.querySelector('.city')

function renderSearch(parentEl, onSearch) {
  parentEl.appendChild(form)

  form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const point = {
      city: cityName.value,
      country: countryName.value,
    }

    onSearch(point)
    form.reset()
  })
}

export default renderSearch
