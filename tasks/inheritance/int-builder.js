const BaseBuilder = require('./base-builder.js')

function IntBuilder(int) {
  const value = (int) || 0
  BaseBuilder.call(this, value)
}

IntBuilder.prototype = Object.create(BaseBuilder.prototype)
IntBuilder.prototype.constructor = IntBuilder

IntBuilder.random = (from, to) => Math.floor(Math.random() * (to - from + 1) + from)

IntBuilder.prototype.minus = function (...n) {
  this.value = [...n].reduce((previousValue, currentValue) => {
    previousValue -= currentValue
    return previousValue
  }, this.value)
  return this
}

IntBuilder.prototype.multiply = function (n) {
  this.value *= n
  return this
}

IntBuilder.prototype.divide = function (n) {
  this.value /= n
  return this
}

IntBuilder.prototype.mod = function (n) {
  this.value %= n
  return this
}

module.exports = IntBuilder
