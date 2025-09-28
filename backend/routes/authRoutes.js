const express = require('express');
const User = require('../models/userModels.js');
const jwt = require('jsonwebtoken');
const router = express.Router();

// @route   POST /api/auth/signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;


  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
        token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: '30d',
        }),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
     console.log('--- LOGIN ATTEMPT ---');
    if (!user) {
      console.log(`Login Error: User with email "${email}" not found.`);
      return res.status(401).json({ message: 'User not found' });
    }
     console.log('User found in DB:', user);
    const isMatch = await user.matchPassword(password);
    console.log('Password comparison result (isMatch):', isMatch);
   

    if (user && isMatch) {
      res.json({
        _id: user._id,
        email: user.email,
        token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: '30d',
        }),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
