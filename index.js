const express= require("express");
const app=  express();
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/courses")
const { adminRouter } = require("./routes/admin")

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter)


// before we start listening at 3000 port, it is important to make sure that we are connected to the database first.
async function main(){
    await mongoose.connect("mongodb+srv://piyush_bansal9:q91h6gb0kblzqQMz@cluster0.f3dh4.mongodb.net/coursesApp-database")
    app.listen(3000);
}

main();