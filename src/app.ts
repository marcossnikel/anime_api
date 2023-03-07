import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console,"Connection Error"))
db.once("open",() => {
    console.log("Sucessful connection with the database");
})


const app = express();
app.use(express.json());


routes(app);

export default app;