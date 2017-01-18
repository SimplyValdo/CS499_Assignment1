/**
 * Created by Valdo on 1/17/2017.
 */

var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile('./homePage.html')
})

app.listen(3444, function () {
    console.log('Example app listening on port 3444!')
})
