const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const router = Router();
const jwt = require("jsonwebtoken");
const config = require("config");

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Bad email").isEmail(),
    check("password", "Bad password, min length = 6").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      console.log(req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Bad data",
        });
      }
      const { email, password } = req.body;

      const candidate = await User.findOne({ email: email });
      if (candidate) {
        return res.status(400).json({ message: "This user already exist" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({ email, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: "New user has been created" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Enter your email").normalizeEmail().isEmail(),
    check("password", "Enter your password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Bad data",
        });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User is not exist" });
      }

      const isGood = await bcrypt.compare(password, user.password);
      if (!isGood) {
        return res.status(400).json({ message: "Bad password" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });
      res.json({ token, userId: user.id });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

module.exports = router;
