const delay = require('./delay');

// sequential
console.time('sequential');
delay(1000).then(() => {
  return delay(1000)
}).then(() => {
  return delay(1000)
}).then(() => {
  return delay(1000)
}).then((e) => {
  console.timeEnd('sequential')
})


// parallel
console.time('parallel')
Promise.all([
  delay(1000),
  delay(1000),
  delay(1000),
  delay(1000),
]).then((data) => {
  console.timeEnd('parallel')
})

// Promise.race
// takes an array of promises
// resolves the very first promise that completes
Promise.race([
  delay(2000, 'a'),
  delay(1000, 'b'),
  delay(2000, 'c'),
  delay(2000, 'd'),
]).then(val => {
  console.log('Who won the race? :' + val);
})