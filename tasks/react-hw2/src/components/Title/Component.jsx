import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { CURRENCY_ARRAY } from '../../constants'

export function Title(props) {
  const {fromValue, fromCurrency, toValue, toCurrency} = props
  
  return (
    <div className="Title">
      <span className="exchange-from">{fromValue} {fromCurrency} equals</span>
      <span className="exchange-to">{toValue} {toCurrency}</span>
    </div>
  )
}

Title.propTypes = {
  fromValue: PropTypes.string,
  fromCurrency: PropTypes.oneOf(CURRENCY_ARRAY),
  toValue: PropTypes.string,
  toCurrency: PropTypes.oneOf(CURRENCY_ARRAY),
}
