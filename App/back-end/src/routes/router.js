const express = require('express');
const router = express.Router();

// Import controllers
const sampleController = require('../controllers/sampleController');
const userController = require('../controllers/userController');
const programController = require('../controllers/programController');


// Define routes
router.get('/sample', sampleController.getSampleData);
router.post('/sample', sampleController.createSampleData);
router.post('/user/login',userController.userLogin);
router.post('/user/signup', userController.userSignUp);
router.get('/getPrograms', programController.getPrograms);
router.post('/getModules', programController.getModules);
router.post('/userDetailsByUserName', userController.userDetailsByUserName);



module.exports = router;