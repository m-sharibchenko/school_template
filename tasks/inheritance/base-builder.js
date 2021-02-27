function BaseBuilder(value) {
  this.value = value
}

BaseBuilder.prototype.get = function () {
  return this.value
}

BaseBuilder.prototype.plus = function (...n) {
  this.value = [...n].reduce((previousValue, currentValue) => {
    previousValue += currentValue
    return previousValue
  }, this.value)
  return this
}

module.exports = BaseBuilder
