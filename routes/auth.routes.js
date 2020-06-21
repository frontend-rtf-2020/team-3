const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const router = Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const { has } = require("config");

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Bad email").normalizeEmail().isEmail(),
    check("password", "Bad password, min length = 6").isLength({ min: 6 }),
    check("myName").isLength({ min: 1 }),
    check("hash"),
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
      const { email, password, hash, myName } = req.body;
      const candidate = await User.findOne({ email: email });

      if (candidate) {
        const isGood = await bcrypt.compare(password, candidate.password);
        if (isGood && hash !== "") {
          candidate.hash = hash;
          candidate.save();
          return res.status(201).json({ message: "ВК привязан!" });
        }
        return res.status(400).json({ message: "This user already exist" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        name: myName || "name",
        email: email,
        password: hashedPassword,
        tables: [],
        hash: hash || "",
      });
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
      res.json({ token, userId: user.id, name: user.name });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/auth/vklogin
router.post(
  "/vklogin",
  [check("hash", "Some hash").exists()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Bad hash",
        });
      }

      const { hash } = req.body;
      const user = await User.findOne({ hash });

      console.log(user);

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });
      res.json({ token, userId: user.id, name: user.name, isExist: true });
    } catch (error) {
      console.log(req.body);
      res.json({ isExist: false });
    }
  }
);

// /api/auth/vkregister
router.post(
  "/vkregister",
  [
    check("email", "Bad email").normalizeEmail().isEmail(),
    check("password", "Bad password, min length = 6").isLength({ min: 6 }),
    check("myName").isLength({ min: 1 }),
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
      const { email, password, myName, hash } = req.body;
      const candidate = await User.findOne({ email: email });
      if (candidate) {
        return res.status(400).json({ message: "This user already exist" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        name: myName || "name",
        email: email,
        password: hashedPassword,
        tables: [],
        vkHash: hash || "",
      });
      await user.save();

      res.status(201).json({ message: "New user has been created" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

module.exports = router;
