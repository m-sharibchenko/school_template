const BaseBuilder = require('./base-builder.js')

class StrBuilder extends BaseBuilder {
  constructor(str) {
    super(str)
  }

  plus = (...str) => {
    this.value += [...str].join('')
    return this
  }

  minus = (n) => {
    this.value = this.value.split('')
      .splice(0, this.value.length - n)
      .join('')
    return this
  }

  multiply = (int) => {
    this.value = this.value.repeat(int)
    return this
  }

  divide = (n) => {
    const k = Math.floor(this.value.length / n)
    this.value = this.value.split('').splice(0, k).join('')
    return this
  }

  remove = (str) => {
    this.value = this.value.split(str).join('')
    return this
  }

  sub = (from, n) => {
    this.value = this.value.split('').splice(from, n).join('')
    return this
  }
}

module.exports = StrBuilder
