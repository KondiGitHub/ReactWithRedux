import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 4000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
//app.use('/images', express.static('images'));

app.get('/', function(req, res) {
  var p = __dirname + '/' + req.params.filepath;
  console.log("111111request path is"+p);
  res.sendFile(path.join( __dirname, '../src/index.html'));
});
app.get('/images/', function(req, res) {

  var p = __dirname + '/' + req.params.filepath;
  console.log("request path is"+p);
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
