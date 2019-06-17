const express = require( 'express' );

const app = express();

const PORT = process.env.PORT || 5000;

app.get( '/test', ( req, res ) => res.json( {status: 'working'} ) );

app.listen( PORT, () => console.log( `Server is listening on port: ${PORT}` ) );