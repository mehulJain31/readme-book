import express from 'express';
import BookClub from '../../models/BookClub.js';

const router = express.Router();

// Get all book clubs
router.get('/', async (req, res) => {
  try {
    const bookClubs = await BookClub.find();
    res.json(bookClubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get book clubs by city and genre
router.get('/:city/:genre', async (req, res) => {
  try {
    const bookClubs = await BookClub.find({
      city: req.params.city,
      genre: req.params.genre
    });
    res.json(bookClubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new book club
router.post('/', async (req, res) => {
  const bookClub = new BookClub(req.body);
  try {
    const newBookClub = await bookClub.save();
    res.status(201).json(newBookClub);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router; 