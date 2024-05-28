import mongoose from "mongoose";

const EmployerSchema = mongoose.Schema({
    name : String,
    email: String,
    password: String,
    City : String,
    State : String,
    Country : String,
    CompanyName : String,
    CompanyAddress : String,
    CompanyDetails : String,

})

export const Employer = mongoose.model("Employer", EmployerSchema)