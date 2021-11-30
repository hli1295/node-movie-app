const logger=require('./middleware/logger');
const morgan=require('morgan');
const helmet=require('helmet');
const genres=require('./routes/genres')
const express=require('express');
const app=express();

app.use('/vidly.com/api/genres',genres);
app.use(express.json());
app.use(logger);
app.use(express.urlencoded());
app.use(helmet());
app.use(morgan('tiny'));

app.listen(3000);