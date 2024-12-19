const{ Router }= require("express");
const adminRouter = Router();
const { AdminModel } = require("../db");
const { adminAuth } = require("../middlewares/adminAuth");

adminRouter.post("/signup", function(req, res){
    res.json({
        message: "You have signed up!"
    })
})

adminRouter.post("/sigin", function(req, res){
    res.json({
        message: "You have logged in!"
    })
})

adminRouter.use(adminAuth)

adminRouter.post("/course", function(req, res){

})

adminRouter.put("/course", function(req, res){

})

adminRouter.get("/course/bulk", function(req, res){

})

module.exports= {
    adminRouter: adminRouter
}