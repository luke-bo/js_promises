// Create the following functions:
// add: Sums two numbers together.
// mult: Multiplies two arguments together.
// div: Divides the first argument by the last.
// sub: Subtracts the last argument from the first.
// pow: Raises the first to the power of the second.
function add(num1, value = 0) {
  return new Promise((res, rej) => {
      if (typeof num1 != "number" || typeof value != "number") {
          rej('Use only numbers as arguments')
      }
      setTimeout(() => {
          console.log(num1 + value)
          res(num1 + value)
      }, 100)
  })
}
function mult(num1, value = 1) {
  return new Promise((res, rej) => {
      setTimeout(() => {
          if (typeof num1 != "number" || typeof value != "number") {
              rej('Use only numbers as arguments')
          }
          console.log(num1 * value)
          res(num1 * value)
      }, 100)
  })
}
function div(num1, value = 1) {
  return new Promise((res, rej) => {
      setTimeout(() => {
          if (typeof num1 != "number" || typeof value != "number") {
              rej('Use only numbers as arguments')
          }
          console.log(num1 / value)
          res(num1 / value)
      }, 100)
  })
}
function sub(num1, value = 0) {
  return new Promise((res, rej) => {
      setTimeout(() => {
          if (typeof num1 != "number" || typeof value != "number") {
              rej('Use only numbers as arguments')
          }
          console.log(value - num1)
          res(value - num1)
      }, 100)
  })
}
function pow(num1, value = 1) {
  return new Promise((res, rej) => {
      setTimeout(() => {
          if (typeof num1 != "number" || typeof value != "number") {
              rej('Use only numbers as arguments')
          }
          console.log(num1 ** value)
          res(num1 ** value)
      }, 100)
  })
}
// add(9)
//     .then(value => add(9, value)) // value is 9
//     .then(value => add(2, value)) // value is 18
//     .then(value => mult(5, value)) // value is 20
//     .then(value => div(value, 10)) // r is 100
//     .then(console.log); // logs 10
pow(2)
  .then(r => pow(2, r)) // r is 2
  .then(r => pow(2, r)) // r is 4
  .then(r => mult("fitty-two", r)) // r is 16, but the mult('fitty-two', ...)
  // should reject
  .then(console.log) // never makes it here
  .catch(console.log); // error logs 'fitty-two is not a valid number'