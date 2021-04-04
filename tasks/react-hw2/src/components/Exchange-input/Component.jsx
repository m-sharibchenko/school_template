import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { CURRENCY_ARRAY } from '../../constants';
import { Input, Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

export function ExchangeInput(props) {
  const {value, currency, setValue, setCurrency, currencyArray} = props

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const onChangeCurrency = (e) => {
    setCurrency(e)
  }

  return (
    <div className="ExchangeInput">
      <Input value={value} onChange={onChangeValue}/>
      <Select value={currency} onChange={onChangeCurrency}>
        {currencyArray.map((item) => {
          return <Option key={item}>{item}</Option>
        })}
      </Select>
    </div>
  )
}

ExchangeInput.propTypes = {
  value: PropTypes.string,
  currency: PropTypes.oneOf(CURRENCY_ARRAY),
  setValue: PropTypes.func,
  setCurrency: PropTypes.func,
  currencyArray: PropTypes.arrayOf(PropTypes.string)
}
