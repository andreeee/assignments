var request = require('request');
var _ = require('underscore');



request('https://api.instagram.com/v1/tags/goodeggseats/media/recent?access_token=TOKEN', function (error, response, body) {
  var newBody = JSON.parse(body)

  if (error) {
    console.log("Error: " + error)
  }
  if (response.statusCode !== 200){
    return console.log('Invalid Status Code Returned:', response.statusCode);
  }
  else {
      _.forEach(newBody, function(arr){
        _.forEach(arr, function(user){
          if (user.caption === undefined){
            return null;
          } else{
            var a = new Date(user.caption['created_time'] * 1000)
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = month + ' ' + date + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
            console.log("Date : " + time + " User: " + user.caption['from']['username'] + " Text: " + user.caption['text'] + "\n" )
          }
        })
      })
  }
})
