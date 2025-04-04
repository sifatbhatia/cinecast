import admin from 'firebase-admin';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Check if required environment variables are present
const projectId = process.env.FIREBASE_PROJECT_ID;
const privateKey = process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

// Log environment variables for debugging (remove in production)
console.log('Firebase Config:', {
  projectId: projectId ? 'Set' : 'Not set',
  privateKey: privateKey ? 'Set' : 'Not set',
  clientEmail: clientEmail ? 'Set' : 'Not set'
});

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert({
    projectId,
    privateKey,
    clientEmail
  })
});

// Initialize Firestore
const db = admin.firestore();

export { admin, db }; 