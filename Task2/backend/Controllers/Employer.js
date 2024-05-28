import bcrypt from "bcryptjs";
import { Employer } from "../Models/Employer.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const result = await Employer.find({ email: email });

    if (result.length === 0) {
      const hash = await bcrypt.hash(password, 10);
      const employer = new Employer({
        name: name,
        email: email,
        password: hash,
      });
      employer.save();

      return res.status(200).json({
        success: true,
        message: "Successfully signed up",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Email already exists",
      });
    }
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await Employer.find({ email: email });
    if (result.length === 0) {
      return res.status(200).json({
        success: false,
        message: "User not exists",
      });
    } else {
      const isMatch = await bcrypt.compare(password, result[0].password);
      if (isMatch) {
        return res.status(200).json({
            success: true,
            message: "Login successful",
        })
      }
      else{
        return res.status(200).json({
            success : false,
            message: "Password Incorrect"
        })
      }
    }
  } catch (err) {}
};
