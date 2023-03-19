import express from "express";
const app = express();
const PORT = 4040;

app.get( "/api/leads", ( req: any, res: { send: (arg0: string) => void; } ) => {
    res.send( "Hello world!" );
} );

app.listen( PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );