import React, { useState, useEffect } from 'react';
import './style.css';
import { createDataArray } from './get-data';
import {findMinValue} from './find-min-value'
import { Line } from '@ant-design/charts';

export function Chart(props) {
  const [data, setData] = useState([])
  const { fromCurrency, toCurrency } = props

  useEffect(() => {
    createDataArray(fromCurrency, toCurrency)
      .then((resultData) => {
      setData(resultData)
    })

  }, [fromCurrency, toCurrency])

  const config = {
    data: data,
    height: 300,
    width: 400,
    xField: 'date',
    yField: 'value',
    yAxis: {
      min: findMinValue(data),
    },
    lineStyle: {
      stroke: 'black',
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      cursor: 'pointer'
    },
  }

  return <Line {...config} />;
}
