const express=require('express')
const authController=require('../controlers/authentication/authenticationControler')
const {authentication_middleware} = require('../midlewares/authentication')
const {validateData_signin,validateData_signup} = require('../midlewares/datavalidator')
const authRouter=express()

// Page rendering
authRouter.get("/SignIn", authController.renderSignInPage)
authRouter.get("/SignUp", authController.renderSignUpPage)
authRouter.get("/Dashboard", authController.renderDashboardPage)
authRouter.get("/Dashboard/AddNewQuestion", authController.renderAddNewQuestionPage)
authRouter.get("/Dashboard/PlayQuiz", authController.renderPlayQuizPage)
authRouter.get("/Dashboard/ViewAllQuestions", authController.renderViewAllQuestionsPage)
authRouter.get("/Dashboard/ViewMyQuestions", authController.renderViewMyQuestionsPage)
authRouter.get("/Dashboard/Scores", authController.renderScoresPage)

// Data end-points.

authRouter.post("/create-user-account",validateData_signup,authController.createUserAccount)
authRouter.post("/verify-user-account",validateData_signin,authController.verifyUserAccount)

module.exports=authRouter;
