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

// Async Await is abstraction on top of promises (like syntax sugar)

// To use Async Await you need Node Version 8+
// You define a asynchronous function using a new keyword `async`

async function timer() {
  // inside of asynchronous functions we have the `await` keyword available.
  // you can prepend await on any promise and it will resolve before moving onto the next line
  const a = await delay(1000, 'horse a');
  // !Important all code inside of async functions run sequentially
  const b = await delay(2000, 'horse b');

  // if you do want to run asynchronous code in parallel you need to wrap them in Promise.all
  const c = await Promise.all([ //promises here run in parallel :)
    delay(2000, 'horse c'),
    delay(2000, 'horse d')
  ]);

  console.log(a);
}

timer();