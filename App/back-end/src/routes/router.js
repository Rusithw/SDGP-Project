const express = require('express');
const router = express.Router();

// Import controllers
const sampleController = require('../controllers/sampleController');
const userController = require('../controllers/userController');


// Define routes
router.get('/sample', sampleController.getSampleData);
router.post('/sample', sampleController.createSampleData);
router.post('/user/login',userController.userLogin);
router.post('/user/signup', userController.userSignUp);
router.get('/getProfile', userController.getProfile);
router.post('/saveProfile', userController.seaveProfile);



module.exports = router;