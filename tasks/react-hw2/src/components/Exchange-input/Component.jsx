import React from 'react';
import './style.css';

export function ExchangeInput(props) {
  const {value, currency, setValue, setCurrency, currencyArray} = props

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const onChangeCurrency = (e) => {
    setCurrency(e.target.value)
  }

  return (
    <div className="ExchangeInput">
      <input className="value" type="text" value={value} onChange={onChangeValue}/>
      <select className="currency" value={currency} onChange={onChangeCurrency}>
        {currencyArray.map((item) => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}
