const express = require('express');
const router = express.Router();

// Import controllers
const sampleController = require('../controllers/sampleController');
const userController = require('../controllers/userController');
const programController = require('../controllers/programController');


// Define routes

router.get('/sample', sampleController.getSampleData);
router.post('/sample', sampleController.createSampleData);

// API Connection created to user login
router.post('/user/login',userController.userLogin);
// API Connection created to user signup
router.post('/user/signup', userController.userSignUp);
// API Connection created to getprograms
router.get('/getPrograms', programController.getPrograms);
// API Connection created to getmodules
router.post('/getModules', programController.getModules);
// API Connection created to userdetailsbyusername
router.post('/userDetailsByUserName', userController.userDetailsByUserName);
// API Connection created to profiledatasave
router.post('/profileDataSave', userController.profileDataSave);



module.exports = router;