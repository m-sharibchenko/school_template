const StrBuilder = require('./str-builder.js')
const IntBuilder = require('./int-builder.js')

const someInt = new IntBuilder(5)

console.log(IntBuilder.random(1, 100))

console.log(someInt
  .plus(9, 5, 4)
  .minus(5, 4)
  .divide(4)
  .multiply(8)
  .mod(6)
  .get())

const someStr = new StrBuilder('Hello Hello')

console.log(someStr
  .plus(' all', '!')
  .minus(4)
  .multiply(3)
  .divide(2)
  .remove('l')
  .sub(1, 2)
  .get())
