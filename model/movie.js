const mongoose=require('mongoose');
const {genreSchema}=require('./genre');

const Movie=mongoose.model('Movies',new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:255
    },
    genre:{
        type:genreSchema,
        required:true
    },
    numberInStock:{
        type:Number,
        required:true,
        minlength:0,
        maxlength:255
    },
    dailyRentalRate:{
        type:Number,
        required:true,
        minlength:0,
        maxlength:255
    }

}));

exports.Movie=Movie;