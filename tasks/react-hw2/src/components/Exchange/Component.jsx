import { Title } from '../Title';
import { ExchangeInput } from '../Currency-input';
import { Chart } from '../Chart';
import './style.css';
import React, { useState, useEffect } from 'react'
import { currencyArray } from '../../constants'

// async function getExchangeRate(from, to) {
//   const response = await fetch('https://openexchangerates.org/api/latest.json' +
//     '?app_id=3f7ea2e7a78e46cbb1a1c5c6c546b015' +
//     `&base=${from}` +
//     `&symbols=${to}`)

async function getExchangeRate(from) {
  const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${from}`)
  let result
  try {
    result = response.json()
  } catch (error) {
    result = null
    console.log(result)
  }
  return result
}

async function tryExchange(value, from, to) {
  // const data = await getExchangeRate(from, to)
  const data = await getExchangeRate(from)
  if (value === '') {
    return '';
  }
  const exchangeValue = parseFloat(value) * parseFloat(data.rates[to])
  return exchangeValue.toFixed(3).toString()
}

export function Exchange(props) {
  const [value, setValue] = useState({one: '1', two: ''})
  const [currencyOne, setCurrencyOne] = useState( 'USD')
  const [currencyTwo, setCurrencyTwo] = useState( 'EUR')

  useEffect(() => {
    async function getData() {
      const data = await tryExchange(value.one, currencyOne, currencyTwo)
      setValue({
        one: value.one,
        two: data,
      })
    }

    getData()
  }, [currencyOne, currencyTwo])

  return (
    <div className="Exchange">
      <div>
        <Title
          fromValue={value.one}
          fromCurrency={currencyOne}
          toValue={value.two}
          toCurrency={currencyTwo}
        />
        <ExchangeInput
          value={value.one}
          currency={currencyOne}
          currencyArray={currencyArray}
          setValue={async (e) => {
            setValue({
              one: e,
              two: await tryExchange(e, currencyOne, currencyTwo)
            })
          }}
          setCurrency={(e) => {setCurrencyOne(e)}}
        />
        <ExchangeInput
          value={value.two}
          currency={currencyTwo}
          currencyArray={currencyArray}
          setValue={async (e) => setValue({
            one: await tryExchange(e, currencyTwo, currencyOne),
            two: e
          })}
          setCurrency={(e) => {setCurrencyTwo(e)}}
        />
      </div>
      <Chart/>
    </div>
  )
}
