const validateData_signup=(req,res,next) => {
    console.log("Validation middleware")
    next();
}
const validateData_signin=(req,res,next) => {
    console.log("Validation middleware")
    next();
}

module.exports = {validateData_signup,validateData_signin};