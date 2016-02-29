require('newrelic');
var path = require('path');
var requestProxy = require('express-request-proxy');

var publicPath = path.resolve(__dirname, '../public');
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

var isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  var config = require('../webpack.config');
  var compiler = require('webpack')(config);
  app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(publicPath));
}

app.use(require('express-bunyan-logger')());

app.get('/', function (req, res) {
  res.sendFile(publicPath + '/index.html');
});

// Since forecast.io doesn't have necessary CORS headers set, we can't
// make a request on the client side and must resort to using a proxy
app.use(/^\/weather\/(.+)$/, requestProxy({
	url: "https://api.forecast.io/forecast/07eb645519c5c9ced960d44ba4e53fad/:0",
}));

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s in %s mode', port, process.env.NODE_ENV);
  }
});
