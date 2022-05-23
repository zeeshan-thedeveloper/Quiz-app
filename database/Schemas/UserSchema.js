const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var Schema = mongoose.Schema
const UserSchema = new mongoose.Schema({
    fistName: {
            type: String,
            required: false,
          }, 
    lastName:{
            type: String,
            required: false,
          },  
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
      },
});



UserSchema.pre("save", function(next){
    const record=this;
    bcrypt.hash(record.password,5,function(err,hash){
        console.log("Applying hash")
        record.password = hash;
        next();
    })
})

const Users = mongoose.model("User", UserSchema);

module.exports = {Users};