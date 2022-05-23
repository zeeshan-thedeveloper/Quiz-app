const bcrypt = require('bcrypt')

const {Users} =require('../../database/Schemas/UserSchema')
const {Quiz}=require('../../database/Schemas/QuizSchema')
// Page rendering
const renderSignInPage=(req,res)=>{
    res.render('SignIn');
}
const renderSignUpPage=(req,res)=>{
    res.render('SignUp');
}
const renderDashboardPage=(req,res)=>{
    // console.log(req.query)
    res.render('Dashboard',{user_id:req.query.user_id});
}

const renderAddNewQuestionPage=(req,res)=>{
    res.render('AddNewQuestion',{user_id:req.query.user_id});
}

const renderPlayQuizPage=(req,res)=>{
    res.render('PlayQuiz',{user_id:req.query.user_id});
}

const renderScoresPage=(req,res)=>{
    res.render('Scores',{user_id:req.query.user_id});
}

const renderViewAllQuestionsPage=async (req,res)=>{
    const response = await Quiz.find({});
    let quizQuestionList=[]    
    try {    
    await Promise.all(response.map(async (file) => {
        console.log(file.CreatedBy.toString())
        const creatorData = await Users.find({_id:file.CreatedBy.toString()})
        quizQuestionList.push({
            quizItem:file,
            authorName:creatorData[0].userName,
        })
    }));
    }catch (error) {
        console.log(error);
    }
    console.log(quizQuestionList)
    res.render('ViewAllQuestions',{user_id:req.query.user_id,quizQuestionList:quizQuestionList});
}
const renderViewMyQuestionsPage=async (req,res)=>{
    const response = await Quiz.find({CreatedBy:req.query.user_id});
    let quizQuestionList=[]    
    try {    
    await Promise.all(response.map(async (file) => {
        console.log(file.CreatedBy.toString())
        const creatorData = await Users.find({_id:file.CreatedBy.toString()})
        quizQuestionList.push({
            quizItem:file,
            authorName:creatorData[0].userName,
        })
    }));
    }catch (error) {
        console.log(error);
    }
    console.log(quizQuestionList)
    res.render('ViewMyQuestions',{user_id:req.query.user_id,quizQuestionList:quizQuestionList});
}

// Database manipulators
const createUserAccount=(req,res)=>{
    Users.create(req.body,(error,user)=>{
        console.log(user)
        res.redirect(`/Dashboard?user_id=${user._id}`)  
    })
}

const verifyUserAccount=(req,res)=>{
    Users.findOne({userName:req.body.userName},(error,user)=>{
        if(!error) {
            console.log(user)
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                // result == true
                if(result) {
                    // Password matched
                    // Move to dashboard
                    // res.send("User verified")
                    res.redirect(`/Dashboard?user_id=${user._id}`)
                }
                else {
                    // Move to sign in again.
                    // res.send("User not verified")
                    res.render("Error",{error_message:"User name or passwod does not match!!"})
                }
            })
        }
        else{
            res.render("Error",{error_message:error.message})
        }
    })
   
}

module.exports = {
    renderSignInPage,
    renderSignUpPage,
    createUserAccount,
    verifyUserAccount,
    renderDashboardPage,
    renderAddNewQuestionPage,
    renderPlayQuizPage,
    renderScoresPage,
    renderViewAllQuestionsPage,
    renderViewMyQuestionsPage
}
