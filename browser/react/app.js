'use strict';

const React = require('react')
const ReactDOM = require('react-dom')
const Main = require('./main.js')
// console.log('Hello React');

fetch('api/albums')
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log("successs");
  console.log(data);
})
.catch(function(err){
  console.err('err');
  console.error(err);
});
