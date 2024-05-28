import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const CandidatesSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  City: String,
  State: String,
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

CandidatesSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

export const Candidates = mongoose.model("Candidates", CandidatesSchema);
