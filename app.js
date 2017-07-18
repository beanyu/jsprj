const Koa = require('koa');
const route = require( 'koa-router' );
let path = require('path');

const app = new Koa();
//app.listen(3000);

app.use(require('koa-static')(__dirname + '/src'));
const Pug = require('koa-pug');
const pug = new Pug({
  viewPath: './views',
  inlineRuntimeFunctions: false,
  compileDebug: true,
  app: app // equals to pug.use(app) and app.use(pug.middleware)
});

pug.locals.someKey = 'some value';

// or use absolute paths


app.use(async (ctx, next) =>  {
	console.log(__dirname);
  	ctx.render('content', { handler : ctx }, true);
});

app.listen(3002);