const mongoose=require('mongoose');
const logger=require('./middleware/logger');
const morgan=require('morgan');
const helmet=require('helmet');
const genres=require('./routes/genres');
const movies=require('./routes/movies');
const customers=require('./routes/customers');
const express=require('express');
const app=express();

mongoose.connect('mongodb://localhost/vidly')
.then(()=>console.log('connecting to DB...'))
.catch(err=>console.log('could not find DB...',err));



app.use('/vidly.com/api/genres',genres);
app.use('/vidly.com/api/movies',movies);
app.use('/vidly.com/api/customers',customers);
app.use(express.json());
app.use(logger);
app.use(express.urlencoded());
app.use(helmet());
app.use(morgan('tiny'));

app.listen(3000);