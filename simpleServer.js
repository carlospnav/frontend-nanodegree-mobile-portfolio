var express = require('express');
var app = express();

//maxage is being set. PageSpeed insights tells me it isn't.
app.use('/dist/js', express.static(__dirname + '/dist/js/', {maxage: '24h' }));
app.use('/dist/css', express.static(__dirname + '/dist/css/', {maxage: '24h' }));
app.use('/dist/img', express.static(__dirname + '/dist/img/', {maxage: '7d' }));
app.use(express.static(__dirname, {maxage: '2h' }));

app.listen(8000);