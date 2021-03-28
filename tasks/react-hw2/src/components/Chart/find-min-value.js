function getArrayOfValue(array) {
  return array.reduce((acc, item) => {
    acc.push(item.value)

    return acc
  }, [])
}

export function findMinValue(array) {
  const valueArray = getArrayOfValue(array)
  let min = valueArray[0]

  for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] < min) {
      min = valueArray[i]
    }
  }

  return min
}
