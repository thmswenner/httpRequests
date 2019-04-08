var request = require('request')
var fs = require('fs')

console.log('Downloading Image')
request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err
  })

  .on('response', function(response) {
    response.statusMessage = response.headers['content-type']
  })

  .pipe(fs.createWriteStream('./future.jpg'));

  console.log('Downloading Complete')