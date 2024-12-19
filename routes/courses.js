const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res){
    res.json({
        message: "Made purchase"
    })
})

courseRouter.get("/preview", function(req, res){
    res.json({
        message: "All courses available"
    })
})

module.exports= {
    courseRouter: courseRouter
}