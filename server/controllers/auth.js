import jwt from "jsonwebtoken";
import User from "../models/User.js";

//Controller for Registering the user
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logging In
export const login = async (req, res) => {
  try {
    // 1-email and Password request using req.body
    const { email, password } = req.body;

    // 2-Find the user in databse with email
    const user = await User.findOne({ email: email });

    // 3-If user doesn't exist return unsuccessfull message
    if (!user) {
      return res.status(400).json({
        message: "SignUp to use our Website",
        data: {},
      });
    }

    // 4- Compare passwords directly (without using bcrypt)
    if (password !== user.password) {
      return res.status(400).json({
        message: "Email/Password doesn't Matched",
        data: {},
      });
    }

    //Token to store the session
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;

    // 5- if password matched return the users profile or data
    return res.status(200).json({
      message: "Logged In Successfully",
      data: {
        token: token,
        user: user,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
