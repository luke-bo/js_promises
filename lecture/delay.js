// create a delay function
// Slide 33 from decks write a function 'delay'. It will take a number of ms as an argument. It'll return a promise that resolves after number of seconds'
// Slide 35 from decks: Add an optional second argument, 'value', to delay. Delay should now resolve the passed value after number of milliseconds

const ONE_SECOND = 1000;

const TWO_SECONDS = 2000;
function delay(ms, value) {
  return new Promise((res, rej) => {
    if (value === 'green') {
      rej('no greens');
    }
    setTimeout(() => { //only used to mimic a async action
      res(value)
    }, ms);
  })
}

module.exports = delay;

// delay(ONE_SECOND, 'blue') //async action waiting for 1 second
//   .then(val => { // when 1 second is complete we log some stuff 
//     console.log(val); 
//     return delay(TWO_SECONDS, 'red') // and then do another async action by returing another promise will cede the resolution to the next then
//   })
//   .then(val => {
//     console.log(val);
//     return delay(ONE_SECOND, 'green');
//   })
//   .then(val => {
//     console.log(val);
//     return delay(ONE_SECOND, 'grey');
//   })
//   .then(val => {
//     console.log(val);
//   })
//   .catch(err => { // if promise rejects it will skip all the remaining thens and go straight to catch
//     console.log(err);
//   })