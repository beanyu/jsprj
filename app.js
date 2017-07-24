const Koa = require('koa');
const path = require('path');
const route = require('./route/index.js');

const app = new Koa();
//app.listen(3000);

app.use(require('koa-static')(__dirname + '/html'));
const Pug = require('koa-pug');
const pug = new Pug({
  viewPath: './views',
  inlineRuntimeFunctions: false,
  compileDebug: true,
  app: app // equals to pug.use(app) and app.use(pug.middleware)
});

pug.locals.someKey = 'some value';

// or use absolute paths


app
	.use(route.routes())
	.use(route.allowedMethods());

app.listen(3002);