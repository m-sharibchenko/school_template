import { Title } from '../Title';
import { ExchangeInput } from '../Exchange-input';
import { Chart } from '../Chart';
import './style.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CURRENCY_ARRAY } from '../../constants';
import { tryExchange } from './get-data';

export function Exchange(props) {
  const {pathCurrencyOne, pathCurrencyTwo} = props

  const [value, setValue] = useState({one: '1', two: ''})
  const [currencyOne, setCurrencyOne] = useState( pathCurrencyOne || 'USD')
  const [currencyTwo, setCurrencyTwo] = useState( pathCurrencyTwo || 'EUR')

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

  const setValueOne = async (e) => {
    setValue({
      one: e,
      two: await tryExchange(e, currencyOne, currencyTwo)
    })
  }

  const setValueTwo = async (e) => {
    setValue({
      one: await tryExchange(e, currencyTwo, currencyOne),
      two: e
    })
  }

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
          setValue={setValueOne}
          setCurrency={setCurrencyOne}
        />
        <ExchangeInput
          value={value.two}
          currency={currencyTwo}
          currencyArray={CURRENCY_ARRAY}
          setValue={setValueTwo}
          setCurrency={setCurrencyTwo}
        />
      </div>
      <Chart
      fromCurrency={currencyOne}
      toCurrency={currencyTwo}
      />
    </div>
  )
}


Exchange.propTypes = {
  pathCurrencyOne: PropTypes.string,
  pathCurrencyTwo: PropTypes.string,
}
