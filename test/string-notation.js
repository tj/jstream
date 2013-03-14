
var fs = require ('fs')
  , json = require('..')
  , assert = require('assert');

var parser = json('*.name.first');

var names = ['Tobi', 'Loki', 'Jane'];
var calls = 0;

parser.on('data', function(obj){
  ++calls;
  assert(~names.indexOf(obj));
});

parser.write('[');
parser.write('  { "name": { "first": "Tobi" } },');
parser.write('  { "name": { "first": "Loki" } },');
parser.write('  { "name": { "first": "Jane" } }');
parser.write(']');

process.on('exit', function(){
  assert(3 == calls);
});
