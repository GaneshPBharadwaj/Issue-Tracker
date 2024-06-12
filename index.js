import express from 'express';
import { connectMongoose } from './config/mongooseConfig.js';
import expressLayouts from 'express-ejs-layouts';
import router from './routes/routes.js';

const app = express();

app.use(expressLayouts);
app.use(express.static('./assets'));


// Extract of CSS links and scripts tag and put them at the head and bottom of the file
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.urlencoded({ extended: true }));

app.use('/', router);

// Setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(3200, ()=>{
    console.log('Server is running at 3200');
    connectMongoose();
});