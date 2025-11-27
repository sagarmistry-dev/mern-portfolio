const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // No token provided
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract token after 'Bearer'

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check role (admin only)
    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Admin only" });
    }

    req.user = decoded; // Attach user to request object
    next();

  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
