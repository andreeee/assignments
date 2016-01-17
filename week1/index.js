var request = require('request');
var _ = require('underscore');
var moment = require('moment');
var config = require('./lib/config.js');


request('https://api.instagram.com/v1/tags/goodeggseats/media/recent?access_token=' + config.instagram.token, function (error, response, body) {
  var newBody = JSON.parse(body)

  if (error) {
    console.error("Error: " + error);
    process.exit(1);
  }
  else if (response.statusCode !== 200) {
    return console.log('Invalid Status Code Returned:', response.statusCode);
  }
  else {
      _.forEach(newBody, function(arr) {
        _.forEach(arr, function(obj) {
          if (obj.caption === undefined) {
            return null;
          } else {
            var time = moment.unix(obj.caption['created_time']).format("YYYY-MM-DD hh:mm a")
            return console.log("Date: " + time + "\nUser: " + obj.caption['from']['username'] + "\nText: " + obj.caption['text'] + "\n" );
          }
        });
      });
  }
});
