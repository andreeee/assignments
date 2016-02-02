var request = require('request');
var fibrous = require ('fibrous');
var _ = require('underscore');
var config = require('../lib/config.js');
var mu = require('mu2');


module.exports = {
    instagram: function() {

      var resp = request.sync('https://api.instagram.com/v1/tags/goodeggseats/media/recent?access_token=' + config.instagram.token);

      if (resp.statusCode !== 200) {
        return console.log('Invalid Status Code Returned:', resp.statusCode);
      }
      else {
        var newBody = JSON.parse(resp.body);
        var newArr = _.map(newBody['data'], function(arr){
          return arr['images']['thumbnail'];
        })
        return newArr;
    }
  }
}
