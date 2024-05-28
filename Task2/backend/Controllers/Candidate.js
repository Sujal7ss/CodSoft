import { Candidates } from "../Models/Candidate.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const results = await Candidates.findOne({ email: email });
    if (!results) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email.",
      });
    }

    const isMatch = await bcrypt.compare(password, results.password);

    const token = await results.generateAuthToken();

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 300000000),
      httpOnly: true,
    });

    console.log(token);
    if (isMatch) {
      return res.status(200).json({
        success: true,
        message: "user verified",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Invalid Password.",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const isUserExist = await Candidates.findOne({ email: email });
    if (isUserExist) {
      return res.status(200).json({
        success: false,
        message: "User already exist",
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const candidate = new Candidates({
      name: name,
      email: email,
      password: hash,
    });
    candidate.save();

    return res.status(200).json({
      success: true,
      message: "User created",
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export { login, signup };
