const delay = require('./delay');
// Promise.resolve... returns a resolved promise

console.log('started')
Promise.resolve('Promise Resolved').then(e => {console.log('promise resolved')})
console.log('after calling Promise.resolve')

// Promise.rejects... returns a rejected promise

// Promise.all
// accepts an array of Promises... it will return an array of resolved promises.

// runs the promises in parallel
// as soon as all the promises have resolved it will resolve
Promise.all([
  delay(1000, 'blue'),
  delay(2000, 'black horse'),
  delay(3000, 'yellow'),
  delay(1000, 'white'),
]).then(data => {
  console.log(data);
}).catch(err => {
  // if any of the promises passed to Promise.all fail... the whole Promise.all rejects
  console.log(err);
})