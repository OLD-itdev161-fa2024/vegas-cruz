//this installs express library or AKA esm package
import express from 'express';
import connectDatabase from './config/db';

//Initialize express application
const app = express();

//Connect database
connectDatabase();

//API endpoints
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

//connection listener 
app.listen(4000, () => console.log('Express server running on port 4000'));