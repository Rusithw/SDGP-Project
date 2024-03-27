const { error } = require("console");
const mysql = require('mysql');

const connection = require("../db/db");

// Function to query the database
function queryDatabase(sql, values) {

    /*
The line return new Promise((resolve, reject) => { creates a new Promise object in JavaScript. Here's a detailed breakdown:
new Promise((resolve, reject) => {: This syntax initializes a new Promise object. The Promise constructor takes a function as its argument, often referred to as the executor function. This function accepts two parameters: resolve and reject, which are functions provided by JavaScript to handle the state of the Promise.
resolve: This function is used when the asynchronous operation represented by the Promise is successful. It is called with a value when the operation completes successfully. This value is passed as an argument to the then() method of the Promise when accessed.
reject: This function is used when the asynchronous operation encounters an error or fails. It is called with a reason or an error object to indicate why the operation failed. This reason is passed as an argument to the catch() method of the Promise when accessed.
}): This curly brace closes the executor function passed to the Promise constructor.
return: This keyword is used to return the Promise object that was created. By returning the Promise, you enable the caller of this function to chain methods like then() and catch() to handle the eventual success or failure of the asynchronous operation encapsulated by the Promise.
In summary, return new Promise((resolve, reject) => { sets up the structure for handling asynchronous operations in JavaScript using Promises. It encapsulates an asynchronous operation and provides mechanisms (resolve and reject functions) for handling its completion or failure.
    */

    return new Promise((resolve, reject) => {
         // Creating a Promise to handle asynchronous database queries
        connection.query(sql, values, (error, results) => {
             // Executing the database query with provided SQL and values
            if (error) {
                // If an error occurs during the query
                reject(error);// Reject the Promise with the error
            } else {
                 // If the query is successful
                resolve(results);// Resolve the Promise with the query results
            }
        });
    });
}

// Function to retrieve enrolled users with their selected programs and modules
exports.getEnrolledUsersWithProgramsAndModules = async (userId) => {
    try {
          // Constructing SQL query to select user details, program name, and module name
        const sql = `SELECT u.user_id,u.user_name,up.university_program_name,um.university_module_name 
        FROM user u
      JOIN
        enrolement e ON u.user_id = e.user_id
      JOIN
        university_programs up ON e.university_program_id = up.university_program_id
      JOIN
        university_program_modules upm ON e.university_program_id = upm.university_program_id
      JOIN
        university_modules um ON upm.university_module_id = um.university_module_id
      WHERE u.user_id = `+ userId + `
    `;
        const results = await queryDatabase(sql);// Executing the SQL query to fetch enrolled users with programs and modules
        return results;// Returning the query results
    } catch (error) {
        console.error('Error fetching enrolled users:', error);// Logging an error if fetching enrolled users fails
        throw error;// Throwing the error
    }
}

// Function to predict future career plans based on university programs and modules
exports.predictCareerPlans = (users) => {
    // Mapping of university programs and modules to potential careers
    const programModuleToCareer = {
        'BEng (Hons) Software Engineering': {
            'Software Development I': 'Software Developer',
            'Mathematics for Computing': 'Software Engineer',
            'Computer Systems Fundamentals': 'System Software Developer',
            'Trends in Computer Science': 'Software Architect',
            'Software Development II': 'Application Developer',
            'Web Design and Development': 'Web Developer',
            'Object Oriented Programming': 'Software Engineer',
            'Database Systems': 'Database Developer',
            'Software Development Group Project': 'Software Project Manager',
            'Software Engineering Principles and Practice': 'Software Engineer',
            'Algorithms: Theory, design and implementation': 'Algorithm Developer',
            'Mobile Application Development': 'Mobile Application Developer',
            'Machine Learning and Data mining': 'Machine Learning Engineer',
            'Robotic Principles': 'Robotics Software Engineer',
            'Operating Systems Programming': 'Operating Systems Developer',
            'Server-side Web Development': 'Full Stack Developer',
            'Cryptography': 'Security Software Engineer',
            'Software Process Management': 'Software Process Engineer',
            'Wireless Technologies and Network Programming': 'Network Software Engineer',
            'Industry Economics and Management': 'Software Development Manager',
            'Case Study Project': 'Software Consultant',
            'Advanced Software Engineering': 'Senior Software Engineer',
            'Professional Skills': 'Software Engineering Manager',
            'Intelligent Systems': 'AI Software Engineer',
            'Parallel Computing': 'Parallel Computing Engineer',
            'Platform Based Development': 'Platform Developer',
            'Final Year Project': 'Software Researcher',
            'Cyber Security': 'Cybersecurity Engineer',
            'Formal Methods': 'Formal Methods Engineer',
            'Concurrent Programming': 'Concurrent Software Engineer',
            'Advanced Server-side Web Programming': 'Advanced Web Developer',
            'Mobile Native Application Development': 'Native Mobile Developer',
            'Operational Research and Optimization': 'Optimization Engineer',
            'Applied Robotics': 'Robotics Software Developer',
            "Digital Marketing,Social Media, Web Analytics": 'Web Analyst/Web Analytics Specialist'
        },
        'BSc (Hons) Computer Science': {
            'Software Development I': 'Software Developer',
            'Mathematics for Computing': 'Software Engineer',
            'Computer Systems Fundamentals': 'System Software Developer',
            'Trends in Computer Science': 'Software Architect',
            'Software Development II': 'Application Developer',
            'Web Design and Development': 'Web Developer',
            'Mobile Application Development': 'Mobile Application Developer',
            'Object Oriented Programming': 'Software Engineer',
            'Database Systems': 'Database Developer',
            'Software Development Group Project': 'Software Project Manager',
            'Machine Learning and Data mining': 'Machine Learning Engineer',
            'Client-Server Architectures': 'Cloud Infrastructure Engineer',
            'HCI & User Experience': 'UI/UX Designer',
            'Advanced Client-side Development ': 'Full-Stack Developer',
            '3D Interactive Media Development': 'Interactive Media Designer',
            'XR & Multimodal Interaction': 'XR Software Engineer',
            'Information Technology Security': 'Information Security Analyst',
            'Game Engine Architecture ': 'Game Engine Developer',
            'Maths and Physics for Games': 'Game Physics Programmer',
            'Sensors & Interfaces': 'Embedded Systems Engineer',
            'Server-side Web Development': 'Full Stack Developer',
            'Algorithms: Theory, design and implementation': 'Algorithm Developer',
            'Robotic Principles': 'Robotics Software Engineer',        
            'Cryptography': 'Security Software Engineer',
            'Software Process Management': 'Software Process Engineer',
            'Wireless Technologies and Network Programming': 'Network Software Engineer',
            'Industry Economics and Management': 'Software Development Manager',
            'Case Study Project': 'Software Consultant',
            'Advanced Software Engineering': 'Senior Software Engineer',
            'Professional Skills': 'Software Engineering Manager',
            'Intelligent Systems': 'AI Software Engineer',
            'Parallel Computing': 'Parallel Computing Engineer',
            'Platform Based Development': 'Platform Developer',
            'Final Year Project': 'Software Researcher',
            'Applied AI ': 'Data Scientist',
            'Cyber Security': 'Cybersecurity Specialist',
            'Mobile Native Application Development': ' Mobile App Developer',
            'Advanced Server-side Web Programming': 'Full stack developer',
            'Usability Testing and Evaluation': 'Usability Analyst',
            'Advanced Interactive Media Development': 'Interactive media developer',
            'Digital Marketing,Social Media, Web Analytics': ' Digital Marketing Manager',
            'Strategic Management of Information Systems': 'Project Manager',
            'Operational Research and Optimization': 'Operations research analyst',
            'Data Visualization and Dashboarding': ' Data analyst',
            'Game AI': 'Game AI Programmer',
            'Applied Robotics': 'Robotics Engineer',
            'Information Entrepreneurship and Enterprise': 'Technology Entrepreneur',
            
        },
        'BSc (Hons) Artificial Intelligence': {
            'Computer Systems Fundamentals': 'System Software Developer',
            'Database Systems': 'Database Developer',
            'Programming Fundamentals': ' AI Software Engineer',
            'Computational Mathematics': 'Quantitative Analyst',
            'English Communication Skills': 'AI Product Manager',
            'Data Structures and Algorithms': 'Data Engineer',
            'Web Technology': 'AI Web Developer',
            'Machine Learning and Data mining': 'Machine Learning Engineer',
            'Object Oriented Development': 'AI Software Developer',
            'Artificial Intelligence': ' AI Researcher',
            'Advanced Mathematics for Data Science': ' Data Scientist',
            'Data Science Group Project': ' AI Researcher',
            'Simulation and Modelling Techniques': ' Research Scientist',
            'Data Engineering ': ' Big Data Engineer',
            'Industrial Placement ': 'Junior Data Scientist',
            'Deep Learning': 'Deep Learning Engineer',
            'Internet of Things and Wearables': 'IoT Solutions Architect',
            'Edge Artificial Intelligence': 'Edge AI Software Developer',
            'Individual Research Project': 'AI Researcher',
            'Research Trends': 'Data Analyst',
            'Computational Intelligence': 'Machine Learning Engineer',
            'Machine Vision': 'Computer Vision Engineer',
            'Language Processing and Information Retrieval': 'Natural Language Processing (NLP) Engineer',
            
        },
        'Engineering': {
            'Mechanical Engineering': 'Mechanical Engineer',
            'Civil Engineering': 'Civil Engineer',
            'Electrical Engineering': 'Electrical Engineer',
            'Chemical Engineering': 'Chemical Engineer',
            'Aerospace Engineering': 'Aerospace Engineer'
            // Add more modules and corresponding careers as needed
        },
        'Medicine': {
            'Anatomy': 'Doctor',
            'Biochemistry': 'Biochemist',
            'Pharmacology': 'Pharmacist',
            'Microbiology': 'Microbiologist',
            'Pathology': 'Pathologist'
            // Add more modules and corresponding careers as needed
        },
        'Business Administration': {
            'Accounting': 'Accountant',
            'Marketing': 'Marketing Manager',
            'Finance': 'Financial Analyst',
            'Management': 'Business Manager',
            'Human Resources': 'HR Manager'
            // Add more modules and corresponding careers as needed
        },
        'Psychology': {
            'Developmental Psychology': 'Developmental Psychologist',
            'Clinical Psychology': 'Clinical Psychologist',
            'Cognitive Psychology': 'Cognitive Psychologist',
            'Social Psychology': 'Social Psychologist',
            'Industrial-Organizational Psychology': 'Industrial Psychologist'
            // Add more modules and corresponding careers as needed
        }
        // Add more programs and corresponding modules and careers as needed
    };

     // Object to store counts of predicted careers
    const careerCounts = {};
     // Looping through each user to count occurrences of predicted careers
    users.forEach(user => {
        const programs = programModuleToCareer[user.university_program_name];// Getting programs associated with the user
        if (programs) { // If programs are found
            const modules = programs[user.university_module_name];// Getting modules associated with the user
            if (modules) { // If modules are found
                careerCounts[modules] = (careerCounts[modules] || 0) + 1; // Incrementing the count for the predicted career
            }
        }
    });

    // Calculate percentage for each career
    const totalUsers = users.length; // Total number of users
    // Object to store percentages of predicted careers
    const careerPercentages = {};
    for (const career in careerCounts) {// Looping through each predicted career
        careerPercentages[career] = (careerCounts[career] / totalUsers) * 100;  // Calculating the percentage for each career
    }

    return careerPercentages;
}

// Main function to predict future career plans
exports.predictFutureCareerPlans = async (req, res) => {
    const { id } = req.params;
    try {
        // Retrieve enrolled users with their selected programs and modules
        const users = await exports.getEnrolledUsersWithProgramsAndModules(id);
        console.log(users)
        // Predict future career plans based on university programs and modules
        const careerPlans = exports.predictCareerPlans(users);
        res.json(careerPlans);
    } catch (error) {
        console.error('Error predicting future career plans:', error);
    }
}

// Secondory function to predict future career plans
exports.predictFutureCareerPlansSimple = async (req, res) => {
    const { id } = req.params; // Extracting 'id' from request parameters
    const dataset = req.body;// Extracting 'dataset' from request body
    console.log(dataset)
    const prog_name = await getProgramName(dataset.selected_program) // Getting the program name from the dataset
    console.log(prog_name)
    let allmodules = []// Array to store all modules

    // Looping through first-year modules to create objects with user details, program name, and module name
    for (var i = 0; dataset.first_year_modules.length > i; i++) {
        set = {
            user_id: id,
            user_name: dataset.user_name,
            university_program_name: prog_name,
            university_module_name: await getModuleName(dataset.first_year_modules[i])// Getting the module name
        }
        allmodules.push(set)// Adding the object to the array
    }
    for (var i = 0; dataset.second_year_modules.length > i; i++) {
        set = {
            user_id: id,
            user_name: dataset.user_name,
            university_program_name: prog_name,
            university_module_name: await getModuleName(dataset.second_year_modules[i])
        }
        allmodules.push(set)
    }
    for (var i = 0; dataset.third_year_modules.length > i; i++) {
        set = {
            user_id: id,
            user_name: dataset.user_name,
            university_program_name: prog_name,
            university_module_name: await getModuleName(dataset.third_year_modules[i])
        }
        allmodules.push(set)
    }
    for (var i = 0; dataset.fourth_year_modules.length > i; i++) {
        set = {
            user_id: id,
            user_name: dataset.user_name,
            university_program_name: prog_name,
            university_module_name: await getModuleName(dataset.fourth_year_modules[i])
        }
        allmodules.push(set)
    }
    console.log(allmodules)
    try {
        // Retrieve enrolled users with their selected programs and modules
        const users = allmodules
        // Predict future career plans based on university programs and modules
        const careerPlans = exports.predictCareerPlans(users);
        res.json(careerPlans);// Sending the predicted career plans as JSON response
    } catch (error) {
        console.error('Error predicting future career plans:', error);// Logging an error if predicting future career plans fails
    }
}

// Function to fetch program name from the database
getProgramName = async (programId) => {
    try {
        const sql = `SELECT university_program_name FROM university_programs WHERE university_program_id = ?`; // SQL query to fetch program name
        const result = await queryDatabase(sql, [programId]);// Executing the SQL query
        if (result.length > 0) {// If program name is found
            return result[0].university_program_name;// Returning the program name
        } else {// If program name is not found
            throw new Error("Program not found");// Throwing an error
        }
    } catch (error) {
        console.error('Error fetching program name:', error);// Logging an error if fetching program name fails
        throw error;// Throwing the error
    }
}

// Function to fetch module name from the database
getModuleName = async (moduleId) => {
    try {
        const sql = `SELECT university_module_name 
        FROM university_program_modules 
        JOIN university_modules 
        ON university_program_modules.university_module_id = university_modules.university_module_id 
        WHERE university_program_modules_id = ?`; // SQL query to fetch module name
        const result = await queryDatabase(sql, [moduleId]);// Executing the SQL query
        if (result.length > 0) {// If module name is found
            return result[0].university_module_name;// Returning the module name
        } else {// If module name is not found
            throw new Error("Module not found");// Throwing an error
        }
    } catch (error) {
        console.error('Error fetching module name:', error);// Logging an error if fetching module name fails
        throw error;// Throwing the error
    }
}