// 
function delay(ms, val) {
  return new Promise((res, rej) => {
    if (val === 'black horse') {
      rej('No black horses')
    }
    // setTimeout is the actual asyncrhonous function here.
    setTimeout(() => {
      // this callback gets executed when the asynchronous setTimeout has completed.
      // when it does complete we call the Promise's `resolve()` function
      res(val)
    }, ms)
  })
}

const prom = delay(3000).then(val => console.log(val));

// promises are just objects that will have a value in the future. While they're waiting to resolve a value they will be in a "pending" state. Only until the promise has called resolve or reject it will stay in this state.
console.log(prom)
setTimeout(() => {
  console.log(prom)
}, 3500)

// Chaining Thens

// The problem = callback hell
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {

      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

// then().then().then()

// delay(ms) returns a promise
delay(2000, 'horse 1').then(data => {
  console.log(data);
  // when the promise is done.
  // return another promise.
  // because the callback is returning another promise
  return delay(2000, 'horse 2');
}).then(data => {
  console.log(data);
  // this then is handling the result of the returned promise of the previous then
  return delay(2000, 'black horse');
}).then(data => {
  console.log(data)
  return delay(2000, 'horse 4');
}).then((val) => {
  console.log(val)
}).catch(err => {
  console.log(err);
})

module.exports = delay;
