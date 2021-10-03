var http = require('http')
//var bl = require('bl')
var concat = require('concat-stream')

http.get(process.argv[2], function (response) {
  response.pipe(concat(function (data) {
    //if (err)
     // return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))  
})