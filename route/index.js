const router = require( 'koa-router' )();

module.exports = router;


router.get( '/', async ( ctx, next ) =>{
		console.log(__dirname);
  	ctx.render('content', { handler : ctx }, true);
} );
