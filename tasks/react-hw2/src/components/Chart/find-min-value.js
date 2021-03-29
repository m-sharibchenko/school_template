export function findMinValue(array) {
  const newArr = array.map(({value}) => value)
  return Math.min(...newArr)
}
