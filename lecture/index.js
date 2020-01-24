// flipCoin
// returns a new promise

function flipCoin() {
  // create an instance of a promise
  // A promise is initialized with a callback
  // the callback has two arguments
  // 1) resolve
  // 2) reject
  return new Promise((resolve, reject) => {
    const face = [1,0][Math.floor(Math.random() * 2)]; // logic to get 1 or 0
    if (face) {
      resolve('tails');
    } else {
      reject('heads');
    }
    // a promise does not need to return any value
    // but it must invoke either resolve or reject.
    // resolve is a function
    // you want resolve a valid/correct value
    // reject is also a function
    // if you get a bad value from a asynchronous action you reject it
  })
}

// flipCoin with asynchronous action. throwCoin

function throwCoin() {
  return new Promise((resolve, reject) => {
    const face = [1,0][Math.floor(Math.random() * 2)]; // logic to get 1 or 0
    // setTimeout is a asynchronous function built into "javascript"
    // it takes in two parameters
    // 1) callback
    // 2) delay in ms
    const delay = [1,2,3,4][Math.floor(Math.random() * 4)] * 1000; // give us random second between 1-4
    if (delay < 3000) {
      setTimeout(() => {
        if(face) {
          resolve('tails')
        } else {
          // we can have multiple resolve or reject calls inside of our promise
          // but only one of the should be executed
          resolve('heads')
        }
      }, delay)
    } else {
      reject("Threw the coin too high! ):")
    }
  })
}

// Using a promise
// throwCoin().then(val => console.log(val)) // omitting brackets
// .then() is what gets execcuted when the promise `resolve()`s
// the value in the callback of .then is the value being passed to `resolve()`
throwCoin().then((val) => {
  console.log(val)
}).catch((err) => {
  //.catch() is what gets executed when the promise `reject()`s
  // the value in the callback of .catch is the value being passed to `reject()`
  console.log(err)
})

// Unhandled Promise
