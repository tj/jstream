
var fs = require ('fs')
  , json = require('..')
  , assert = require('assert');

var parser = json.parse([true, 'name', 'first']);

var names = ['Tobi', 'Loki', 'Jane'];

parser.on('data', function(obj){
  assert(~names.indexOf(obj));
});

parser.write('[');
parser.write('  { "name": { "first": "Tobi" } },');
parser.write('  { "name": { "first": "Loki" } },');
parser.write('  { "name": { "first": "Jane" } }');
parser.write(']');
