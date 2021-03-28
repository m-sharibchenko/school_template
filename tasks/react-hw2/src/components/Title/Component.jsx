import React from 'react';
import './style.css';

export function Title(props) {
  const {fromValue, fromCurrency, toValue, toCurrency} = props
  
  return (
    <div className="Title">
      <span className="exchange-from">{fromValue} {fromCurrency} equals</span>
      <span className="exchange-to">{toValue} {toCurrency}</span>
    </div>
  )
}
