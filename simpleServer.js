var express = require('express'),
    app = express(),
    compression = require('compression');

//gzip compression.
app.use(compression());

//maxage is being set. PageSpeed insights tells me it isn't.
app.use('/dist/js', express.static(__dirname + '/dist/js/', { etag: true, maxAge: '24h' }));
app.use('/dist/css', express.static(__dirname + '/dist/css/', { etag: true, maxAge: '24h' }));
app.use('/dist/img', express.static(__dirname + '/dist/img/', { etag: true, maxAge: '7d' }));
app.use(express.static(__dirname, { maxAge: '2h' }));

app.listen(8000);