import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  companyName: String,
  name: String,
  phone: Number,
  city: String,
  state: String,
  country: String,
  about : String
});

export const Company = mongoose.model("Company", CompanySchema)

