const mongoose=require('mongoose');
const genreSchema=new mongoose.Schema({
    name:{type:String,
    required:true,
    minlength:5,
    maxlength:50
}

});

const Genre=mongoose.model('Genres',genreSchema);

exports.genre=Genre;
exports.genreSchema=genreSchema;

