require('newrelic');
var path = require('path');
var requestProxy = require('express-request-proxy');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');

var publicPath = path.resolve(__dirname, '../public');
var app = require('express')();
var port = process.env.PORT || 1337;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

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
    console.info('==> 🌎  Listening on port %s.', port);
  }
});
