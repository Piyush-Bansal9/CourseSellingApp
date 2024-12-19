const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", function(req, res){
    res.json({
        message: "You have signed up!"
    })
})

userRouter.post("/sigin", function(req, res){
    res.json({
        message: "You have logged in!"
    })
})

userRouter.get("/purchases", function(req, res){
    res.json({
        message: "Your Purchases"
    })
})

module.exports= {
    userRouter: userRouter
}