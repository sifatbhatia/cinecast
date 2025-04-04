import express from 'express';
import { admin } from '../config/firebase.js';

const router = express.Router();

// Middleware to verify Firebase token
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    
    // Create user in Firebase
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: fullName
    });

    // Send success response
    res.status(201).json({
      message: 'User created successfully',
      uid: userRecord.uid
    });
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      return res.status(400).json({ 
        error: 'Email already in use',
        code: 'EMAIL_EXISTS'
      });
    }
    console.error('Error creating user:', error);
    res.status(500).json({ 
      error: 'Error creating user',
      code: error.code
    });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Sign in with email and password
    const userCredential = await admin.auth().getUserByEmail(email);
    
    // Create a custom token for the user
    const customToken = await admin.auth().createCustomToken(userCredential.uid);

    // Send the token and user info
    res.json({
      token: customToken,
      user: {
        uid: userCredential.uid,
        email: userCredential.email,
        displayName: userCredential.displayName
      }
    });
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      return res.status(400).json({
        error: 'No account found with this email',
        code: 'auth/user-not-found'
      });
    }
    console.error('Error during login:', error);
    res.status(500).json({
      error: 'Failed to log in',
      code: error.code
    });
  }
});

// Protected route example
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await admin.auth().getUser(req.user.uid);
    res.json({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 