import { Title } from '../Title';
import { ExchangeInput } from '../Exchange-input';
import { Chart } from '../Chart';
import './style.css';
import React, { useState, useEffect } from 'react'
import { CURRENCY_ARRAY } from '../../constants'
import { tryExchange } from './get-data'

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
      <div className="main-content">
        <Title
          fromValue={value.one}
          fromCurrency={currencyOne}
          toValue={value.two}
          toCurrency={currencyTwo}
        />
        <ExchangeInput
          value={value.one}
          currency={currencyOne}
          currencyArray={CURRENCY_ARRAY}
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
          currencyArray={CURRENCY_ARRAY}
          setValue={async (e) => setValue({
            one: await tryExchange(e, currencyTwo, currencyOne),
            two: e
          })}
          setCurrency={(e) => {setCurrencyTwo(e)}}
        />
      </div>
      <Chart
      fromCurrency={currencyOne}
      toCurrency={currencyTwo}
      />
    </div>
  )
}
