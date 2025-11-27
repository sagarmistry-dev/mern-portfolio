require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserRepository = require("../../infrastructure/repositories/UserRepository");

const loginUser = async ({ email, password }) => {
  // Step 1: Check if user exists
  const user = await UserRepository.findByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Step 2: Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // Step 3: Create JWT token
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    message: "Login Successful",
    token,
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = loginUser;
