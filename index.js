var express = require('express');
var camera = require('camera-usb');
var fs = require('fs');
var myip = require('my-ip');

var app = express();

app.get('/', function (req, res) {
	res.setHeader('content-type', 'image/jpeg');
	camera.acquire(function loop (err, camera) {
		camera.captureFrame('jpeg')
		.on('end', function () {
			camera.close();
		})
		.pipe(res)
	})
})

var server = app.listen(3444, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', myip(null, false), port)
})
