import React from 'react';
import './style.css';

export function Title(props) {
  const {fromValue, fromCurrency, toValue, toCurrency} = props
  return (
    <div className="Title">
      {fromValue} {fromCurrency} equals {toValue} {toCurrency}
    </div>
  )
}
