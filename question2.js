function fibonacciSequence(number) {
  let fibonacci = [0, 1]
  let nextNumber = 1
  while (nextNumber <= number) {
    nextNumber =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    fibonacci.push(nextNumber)
  }
  if (fibonacci.includes(number)) {
    console.log(number + ' pertence à sequência de Fibonacci.')
  } else {
    console.log(number + ' não pertence à sequência de Fibonacci.')
  }
}

fibonacciSequence(21)
fibonacciSequence(25)
