const mongoose = require("mongoose")
const Schema = mongoose.Schema
console.log("hii")
mongoose.connect("mongodb+srv://piyush_bansal9:q91h6gb0kblzqQMz@cluster0.f3dh4.mongodb.net/coursesApp-database")

const User = new Schema({
    email: {type: String, unique: true},
    name: String, 
    password: String,
})

const Admin = new Schema({
    email: {type: String, unique: true},
    name: String, 
    password: String,
})

const Courses = new Schema({
    title: String,
    description: String,
    price: Number,
    CreatedBy: mongoose.Types.ObjectId,
    imageUrl: String
})

const Purchases = new Schema({
    coursePurchased: mongoose.Types.ObjectId,
    PurchasedBy: mongoose.Types.ObjectId
})

const UserModel = mongoose.model("user", User)
const AdminModel = mongoose.model("admin", Admin)
const CoursesModel = mongoose.model("courses", Courses)
const PurchasesModel = mongoose.model("purchases", Purchases)   

module.exports = {
    UserModel: UserModel,
    AdminModel: AdminModel,
    CoursesModel: CoursesModel,
    PurchasesModel: PurchasesModel
}