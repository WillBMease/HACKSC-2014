
var Myo = require('myo');
// var myMyo = Myo.create();

var express = require('express');
var app = express();

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'public/*.js'
    ]
  });
};

app.get('/', function(req, res) {
   res.sendfile('./index.html');
});

app.use(express.static('public'));

app.listen(8888);
console.log('Listening on port 8888');
