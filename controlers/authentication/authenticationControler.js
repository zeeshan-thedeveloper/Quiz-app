const {Users} =require('../../database/Schemas/UserSchema')

// Page rendering
const renderSignInPage=(req,res)=>{
    res.render('SignIn');
}
const renderSignUpPage=(req,res)=>{
    res.render('SignUp');
}

// Database manipulators
const createUserAccount=(req,res)=>{
    Users.create(req.body,(error,user)=>{
        console.log(user)
        res.send({responseMessage:"Account created"})
    })
}

module.exports = {
    renderSignInPage,
    renderSignUpPage,
    createUserAccount
}