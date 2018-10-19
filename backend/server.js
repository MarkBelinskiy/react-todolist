const express = require( 'express' );
const bodyParser = require( 'body-parser' );

// Configuring the database
const dbConfig = require( './config/database.config.js' );
const mongoose = require( 'mongoose' );

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use( bodyParser.urlencoded( { extended: true } ) );

app.use( function ( req, res, next ) {
	res.header( "Access-Control-Allow-Origin", "*" );
	res.header( "Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, UPDATE" );
	res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
	next();
} );


// parse requests of content-type - application/json
app.use( bodyParser.json() );

const options = {
	autoIndex: false, // Don't build indexes
	reconnectTries: 30, // Retry up to 30 times
	reconnectInterval: 500, // Reconnect every 500ms
	poolSize: 10, // Maintain up to 10 socket connections
	useNewUrlParser: true,
	// If not connected, return errors immediately rather than waiting for reconnect
	bufferMaxEntries: 0
};

const connectWithRetry = () => {
	console.log( 'MongoDB connection with retry' )
	mongoose.connect( dbConfig.url, options ).then( () => {
		console.log( 'MongoDB is connected' )
	} ).catch( err => {
		console.log( 'MongoDB connection unsuccessful, retry after 5 seconds.' );
		console.log( 'Error log: ', err );
		setTimeout( connectWithRetry, 5000 )
	} )
};

connectWithRetry();

// define a simple route
app.get( '/', ( req, res ) => {
	res.json( { "message": "Welcome to ReactNotes application. Take notes quickly. Organize and keep track of all your notes." } );
} );

// Require Notes routes
require( './app/routes/note.routes.js' )( app );

// listen for requests
app.listen( 3008, () => {
	console.log( "Server is listening on port 3008" );
} );
