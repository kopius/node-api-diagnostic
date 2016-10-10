'use strict';

const fs = require('fs'); // jshint ignore: line

let filename = 'data/strings.txt';

const sumLines = (filename, callback) => {

  fs.readFile(filename, (error, data) => {
    if (error) {
      console.error(error);
    } else {
    let sum = 0;

    try {
      data = data.toString();
      sum = data.split('\n').reduce((pre, cur) => pre + Number(cur), 0);
    } catch (error) {
      callback(new Error('something went wrong'));
    }

    console.log(sum);
    }
  });

};

sumLines(filename);
