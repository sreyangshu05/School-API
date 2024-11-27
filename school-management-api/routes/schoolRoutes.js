const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// Add School
router.post('/addSchool', schoolController.addSchool);

// List Schools
router.get('/listSchools', schoolController.listSchools);

module.exports = router;
