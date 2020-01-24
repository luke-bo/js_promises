function add(num, val=0) {
  return new Promise((res, rej) => {
    if (typeof(num) !== 'number') {
      rej('Pls enter a number');
    }
    // setTimeout is the actual asyncrhonous function here.
    setTimeout(() => {
      // this callback gets executed when the asynchronous setTimeout has completed.
      // when it does complete we call the Promise's `resolve()` function
      res(num + val);
    }, 0);
  });
}

function mult(num, val=1) {
  return new Promise((res, rej) => {
    if (typeof(num) !== 'number' || typeof(val) !== 'number') {
      rej('Pls enter a number');
    }
    // setTimeout is the actual asyncrhonous function here.
    setTimeout(() => {
      // this callback gets executed when the asynchronous setTimeout has completed.
      // when it does complete we call the Promise's `resolve()` function
      res(num * val);
    }, 0);
  });
}

function div(num, val=1) {
  return new Promise((res, rej) => {
    if (typeof(num) !== 'number' || typeof(val) !== 'number') {
      rej('Pls enter a number');
    }
    // setTimeout is the actual asyncrhonous function here.
    setTimeout(() => {
      // this callback gets executed when the asynchronous setTimeout has completed.
      // when it does complete we call the Promise's `resolve()` function
      res(num / val);
    }, 0);
  });
}



add(9)
  .then(value => add(9, value)) // value is 9
  .then(value => add(2, value)) // value is 18
  .then(value => mult(5, value)) // value is 20
  .then(value => div(value, 10)) // r is 100
  .then(console.log); // logs 10