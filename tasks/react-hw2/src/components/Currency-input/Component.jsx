import './style.css';

export function ExchangeInput(props) {
  const {value, currency, setValue, currencyArray, setCurrency} = props

  const someFunc = (e) => {
    setValue(e.target.value)
  }
  const onChangeCurrency = (e) => {
    setCurrency(e.target.value)
  }

  return (
    <div className="ExchangeInput">
      <input type="text" value={value} onChange={someFunc}/>
      <select value={currency} onChange={onChangeCurrency}>
        {currencyArray.map((item) => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}
