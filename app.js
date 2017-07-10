const Koa = require('koa');
const route = require( 'koa-router' );
const Pug = require( 'koa-pug' );

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

const koa = require('koa')
const app = koa()

const Pug = require('koa-pug')
const pug = new Pug({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false,
  locals: global_locals_for_all_pages,
  basedir: 'path/for/pug/extends',
  helperPath: [
    'path/to/pug/helpers',
    { random: 'path/to/lib/random.js' },
    { _: require('lodash') }
  ],
  app: app // equals to pug.use(app) and app.use(pug.middleware)
})

pug.locals.someKey = 'some value'

app.use(function* () {
  this.render('index', locals_for_this_page, true)
})