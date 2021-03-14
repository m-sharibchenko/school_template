function BaseBuilder(value) {
  this.value = value
}

BaseBuilder.prototype.get = function () {
  return this.value
}

BaseBuilder.prototype.plus = function (...n) {
  this.value = n.reduce((total, value) => {
    let acc = total
    acc += value
    return acc
  }, this.value)
  return this
}

module.exports = BaseBuilder
