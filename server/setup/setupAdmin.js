require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserModel = require("../infrastructure/models/UserModel");

const createAdmin = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // 2. Use environment variables instead of hardcoded values
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD || "default123";

    if (!adminEmail || !adminPassword) {
      console.error("❌ ADMIN_EMAIL or ADMIN_PASSWORD not set in .env");
      process.exit(1);
    }

    // 3. Check if admin already exists
    const existingAdmin = await UserModel.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log("ℹ️ Admin already exists.");
      process.exit(0);
    }

    // 4. Hash password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // 5. Create admin
    const admin = new UserModel({
      name: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
    });

    await admin.save();
    console.log("✅ Admin created successfully!");
    console.log(`📧 Email: ${adminEmail}`);
    console.log("🔑 Password: [hidden for security]");
    process.exit(0);

  } catch (err) {
    console.error("❌ Error creating admin:", err.message);
    process.exit(1);
  }
};

createAdmin();
