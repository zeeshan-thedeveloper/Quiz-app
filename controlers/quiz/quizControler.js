const {Quiz} = require("../../database/Schemas/QuizSchema")

const addQuestion=(req,res) => {
    console.log(req.query.user_id)
 
    const quizHandler = {
        Question:req.body.Question,
        Options:req.body.options,
        RightAnswer:req.body.right_answer,
        CreatedBy:req.query.user_id
    }

    Quiz.create(quizHandler,(error,question)=>{
        if(!error) {
            console.log(question)
            res.redirect(req.get('referer'));
        }
        else{
            console.log(error.message)
            res.redirect(req.get('referer'));
        }
    })
   
}

const removeQuestion = (req, res) => {
    Quiz.deleteOne({_id:req.query._id},(error)=>{
        if(!error)
        {
        console.log("Delte")
        res.send("Deelte")
        }
        else{
            res.send(error.message)
        }
    })
}
module.exports ={addQuestion,removeQuestion}