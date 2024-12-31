import express from 'express';
import jwt from 'jsonwebtoken';
import { Member } from '../models/db.js';  // Assuming db.js contains the Member model

const router = express.Router();

// Login Route: Authenticates user by enrollment number and password
router.post('/login', async (req, res) => {
  const { enrollmentNumber, password } = req.body;

  if (!enrollmentNumber || !password) {
    return res.status(400).json({message: 'Enrollment number and password are required'});
  }

  try {
    // Find the member by enrollment number
    const member = await Member.findOne({ enrollmentNumber });

    if (!member) {
      return res.status(404).send('Member not found');
    }

    // Check if the member's status is "Approved"
    if (member.status !== 'Approved') {
      return res.status(403).send('Account not approved. Please contact the administrator.');
    }

    // Compare the password directly (without bcrypt)
    if (member.password !== password) {
      return res.status(401).json({message:'Invalid password'});
    }
    
    // Create a JWT token
    const token = jwt.sign(
      { id: member._id, role: member.role, department: member.department }, // Payload
      "hehe", // Secret key
      { expiresIn: '20h' } // Token expiration
    );

    res.json({ message: 'Login successful', userId: member._id, token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

export default router;
