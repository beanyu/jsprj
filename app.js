const Koa = require('koa');
const route = require( 'koa-router' );

const app = new Koa();
//app.listen(3000);


const Pug = require('koa-pug');
const pug = new Pug({
  viewPath: './views',
  app: app // equals to pug.use(app) and app.use(pug.middleware)
});

pug.locals.someKey = 'some value';

app.use(function* () {
  this.render('index', true)
});

app.listen(3000);