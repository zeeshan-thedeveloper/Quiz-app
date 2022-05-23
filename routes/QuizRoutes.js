const express=require('express')
const quizControler=require('../controlers/quiz/quizControler')
const quizRouter=express()

quizRouter.post("/AddQuestion",quizControler.addQuestion)

quizRouter.get("/RemoveQuestion",quizControler.removeQuestion)

module.exports = quizRouter