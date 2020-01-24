const fs = require('fs')

function readFile(path, opt) {
  return new Promise((res, rej) => {
    fs.readFile(path, opt, (err, data) => {
      if (err) {
        rej(err);
      }
      res(data);
    })
  })
}

readFile('./delay.js', {encoding: 'utf8'})
  .then(data => {
    console.log(data);
  }).catch(e => {
    console.log(e);
  })