import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Stopwatch extends React.Component {
  timeId = null

  constructor(props) {
    super(props)

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  tick() {
    this.setState( (state) => ({
      seconds: state.seconds + 1,
    }))

    if (this.state.seconds >= 60) {
      this.setState( (state) => ({
        minutes: state.minutes + 1,
        seconds: state.seconds - 60,
      }))
    }

    if (this.state.minutes >= 60) {
      this.setState( (state) => ({
        hours: state.hours + 1,
        minutes: state.minutes - 60,
      }))
    }
  }

  start = () => {
    this.timeId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  stop = () => {
    clearInterval(this.timeId)
  }

  reset = () => {
    this.setState ({
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
    clearInterval(this.timeId)
  }

  formatItem(prop) {
    if (prop < 10) {
      return `0${prop}`
    } else {
      return `${prop}`
    }
  }

  formatStopwatch = () => {
    return `${this.formatItem(this.state.hours)} : ${this.formatItem(this.state.minutes)} : ${this.formatItem(this.state.seconds)}`
  }

  render() {
    return (
      <div className="wrapper">
        <div className="Stopwatch">{this.formatStopwatch()}</div>
        <div className="btn-wrapper">
          <button className="btn-start" onClick={this.start}>Start</button>
          <button className="btn-stop" onClick={this.stop}>Stop</button>
          <button className="btn-reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
