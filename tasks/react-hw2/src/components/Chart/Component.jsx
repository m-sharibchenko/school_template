import React, { useState, useEffect } from 'react';
import './style.css';
import { Line } from '@ant-design/charts'

async function getData(date) {
  const response = await fetch(`https://api.exchangeratesapi.io/${date}`)
  // const response = await fetch('https://openexchangerates.org/api/historical/' +
  //   `${date}.json?` +
  //   'app_id=3f7ea2e7a78e46cbb1a1c5c6c546b015')
  let result
  try {
    result = response.json()
  } catch (error) {
    result = null
    console.log(result)
  }
  return result
}

async function getDateForChart(date, from, to) {
  const data = await getData(date)
  // if (from === 'USD') {
  if (from === 'EUR') {
    return parseFloat(data.rates[to])
  }
  return parseFloat(data.rates[to]) / parseFloat(data.rates[from])
}

function getDaysArray(start, end) {
  let arr = []
  for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
    const date = new Date(dt)
    const formatDate = date.toISOString().slice(0, 10)
    arr.push(formatDate);
  }
  return arr
}

const dateArray = getDaysArray(new Date().setDate(new Date().getDate() - 30), new Date())

async function createArray() {
  const acc = []
  for (let i = 0; i < dateArray.length; i++) {

    const el = {
      date: dateArray[i],
      value: await getDateForChart(dateArray[i], 'EUR', 'USD')
    }

    acc.push(el)
  }
  return acc
}

export function Chart(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    createArray().then((resultData) => {
      setData(resultData)
    })
  }, [])

  const config = {
    data: data,
    xField: 'date',
    yField: 'value',
  }

  return <Line {...config} />;
}
