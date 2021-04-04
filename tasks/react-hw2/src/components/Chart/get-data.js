import { BASE_CURRENCY } from '../../constants'

async function getAllExchangeRates(date) {
  const response = await fetch('https://openexchangerates.org/api/historical/' +
    `${date}.json?` +
    'app_id=3f7ea2e7a78e46cbb1a1c5c6c546b015')
  let result

  try {
    result = response.json()
  } catch (error) {
    result = null
  }

  return result
}

async function getRatesForChart(date, fromCurrency, toCurrency) {
  const data = await getAllExchangeRates(date)
  if (fromCurrency === toCurrency) {
    return 1
  }
  if (fromCurrency === BASE_CURRENCY) {
    return parseFloat(data.rates[toCurrency])
  }

  if (toCurrency === BASE_CURRENCY) {
    return 1 / parseFloat(data.rates[fromCurrency])
  }

  return parseFloat(data.rates[toCurrency]) / parseFloat(data.rates[fromCurrency])
}

function getDaysForChart(start, end) {
  let arr = []

  for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
    const date = new Date(dt)
    const formatDate = date.toISOString().slice(0, 10)

    arr.push(formatDate);
  }

  return arr
}

export async function createDataArray(fromCurrency, toCurrency) {
  const dateArray = getDaysForChart(new Date().setDate(new Date().getDate() - 30), new Date())
  const acc = []

  for (let i = 0; i < dateArray.length; i++) {
    const el = {
      date: dateArray[i],
      value: await getRatesForChart(dateArray[i], `${fromCurrency}`, `${toCurrency}`)
    }

    acc.push(el)
  }

  return acc
}
