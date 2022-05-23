const authentication_middleware = (req,res,next)=>{
    console.log("Auth middle ware")
    next();
}

module.exports ={authentication_middleware}