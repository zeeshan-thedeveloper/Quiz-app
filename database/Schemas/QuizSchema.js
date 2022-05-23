const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

const QuizSchema = new mongoose.Schema({
    Question: {
      type: String,
      required: true,
    },
    Options:[{type: String}],
    RightAnswer:{
       type : String,
    },
    CreatedBy:{
        type:ObjectId
    }
});

const Quiz = mongoose.model("Quizez", QuizSchema);
module.exports = {Quiz};    
