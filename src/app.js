import express from 'express';
import http from 'http';
const app=express();
app.use('/content/music',require("./router"));
const entryUrl='http://localhost:4000/content/music?id=186016&limit=100&offset=5';
http.get(entryUrl, function(res) {
    var html = '';
    res.on('data', function(data) {
        html += data;
    });
    res.on('end', function() {
        console.log(html);
    });
});
var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('The app listening at localhost:4000/content/music?', host, port);
});