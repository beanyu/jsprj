const Koa = require('koa');
const route = require( 'koa-router' );
let path = require('path');

const app = new Koa();
//app.listen(3000);

app.use(require('koa-static')(__dirname + '/lib'));
const Pug = require('koa-pug');
const pug = new Pug({
  viewPath: './views',
  app: app // equals to pug.use(app) and app.use(pug.middleware)
});

pug.locals.someKey = 'some value';

// or use absolute paths


app.use(function* () {
	console.log(__dirname);
  	this.render('index')
});

app.listen(3002);