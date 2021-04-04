async function getExchangeRate() {
  const response = await fetch('https://openexchangerates.org/api/latest.json' +
    '?app_id=3f7ea2e7a78e46cbb1a1c5c6c546b015')
  let result
  try {
    result = response.json()
  } catch (error) {
    result = null
  }

  return result
}

export async function tryExchange(value, from, to) {
  const data = await getExchangeRate()

  if (value === '') {
    return '';
  }
  if (to === from) {
    return value
  }

  const exchangeValue = parseFloat(value) / parseFloat(data.rates[from])  * parseFloat(data.rates[to])
  return exchangeValue.toFixed(3).toString()
}

