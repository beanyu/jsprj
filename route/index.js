const router = require( 'koa-router' )();

module.exports = router;


router.get( '/', async ( ctx, next ) =>{
	console.log(__dirname);
  	ctx.render('content', { handler : ctx, id: 'wrapper', title : 'KRP Demo ', reactjs : 'built/bundle_home.js' }, true);
} );


router.get( '/signup', async ( ctx, next ) =>{
	console.log(__dirname+"/signup");
  	ctx.render('content', { handler : ctx, id: 'signup', title : 'Sign Up', reactjs : 'built/bundle_signup.js' }, true);
} );