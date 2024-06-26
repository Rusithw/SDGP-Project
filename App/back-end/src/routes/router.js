const express = require('express');
const router = express.Router();

// Import controllers
const sampleController = require('../controllers/sampleController');
const userController = require('../controllers/userController');
const programController = require('../controllers/programController');
const predictionController = require('../controllers/predictionController');

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
router.post('/dataSaveModules', userController.dataSaveModules);
router.post('/loadProfileData', userController.loadProfileData);
// This API connection created to get user to load their details in the My Account page. 
router.post("/getUser" , userController.getUser);
// The API connection is used to update the user details in my account page.
router.put('/updateUser/:id/', userController.updateUser);
// API connection is used to get the cities to the My Account page.
router.post('/getCities', userController.getCities);

router.post('/prediction1/get/:id/',predictionController.predictFutureCareerPlans);
router.post('/prediction2/get/:id/',predictionController.predictFutureCareerPlansSimple);

module.exports = router;