const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Logger setup
const logger = {
  info: (...args) => console.log(new Date().toISOString(), '[INFO]', ...args),
  error: (...args) => console.error(new Date().toISOString(), '[ERROR]', ...args),
  debug: (...args) => console.log(new Date().toISOString(), '[DEBUG]', ...args)
};

const app = express();

// Log all incoming requests
app.use((req, res, next) => {
  logger.info(`Incoming ${req.method} request to ${req.url}`);
  logger.debug('Request headers:', req.headers);
  if (req.body && Object.keys(req.body).length > 0) {
    logger.debug('Request body:', { ...req.body, password: '[REDACTED]' });
  }
  next();
});

// Middleware with detailed CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// MongoDB connection with detailed logging
const connectDB = async () => {
  try {
    logger.info('Attempting to connect to MongoDB...');
    await mongoose.connect('mongodb://127.0.0.1:27017/bookworm', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('MongoDB Connected Successfully');
  } catch (err) {
    logger.error('MongoDB Connection Error:', err.message);
    logger.debug('Full connection error:', err);
    process.exit(1);
  }
};

connectDB();

// Add connection error handling
mongoose.connection.on('error', err => {
  logger.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  logger.info('MongoDB disconnected');
});

mongoose.connection.on('connected', () => {
  logger.info('MongoDB reconnected');
});

// Test route
app.get('/api/test', (req, res) => {
  logger.info('Test endpoint accessed');
  res.json({ message: 'Server is running' });
});

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Routes with better error handling
app.post('/api/users/register', async (req, res) => {
  logger.info('Received registration request');
  logger.debug('Registration request body:', { ...req.body, password: '[REDACTED]' });
  
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      logger.error('Missing required fields in registration request');
      return res.status(400).json({ 
        message: 'Please provide all required fields' 
      });
    }

    // Check if user exists
    logger.debug('Checking for existing user');
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });
    
    if (existingUser) {
      logger.info('Registration failed: User already exists:', email);
      return res.status(400).json({ 
        message: 'User with this email or username already exists' 
      });
    }

    // Hash password
    logger.debug('Hashing password');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    logger.debug('Creating new user');
    const user = new User({
      username,
      email,
      password: hashedPassword
    });

    await user.save();
    logger.info('User created successfully:', username);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    logger.error('Registration error:', error.message);
    logger.debug('Full error object:', error);
    res.status(500).json({ 
      message: 'Error creating user',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  logger.info(`Test the server at http://localhost:${PORT}/api/test`);
});

// Handle server errors
server.on('error', (error) => {
  logger.error('Server error:', error);
});

process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Promise Rejection:', err);
});

process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception:', err);
}); 