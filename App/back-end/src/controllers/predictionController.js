const { error } = require("console");
const mysql = require('mysql');

const connection = require("../db/db");

// Function to query the database
function queryDatabase(sql, values) {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

// Function to retrieve enrolled users with their selected programs and modules
exports.getEnrolledUsersWithProgramsAndModules = async (userId) => {
    try {
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
        const results = await queryDatabase(sql);
        return results;
    } catch (error) {
        console.error('Error fetching enrolled users:', error);
        throw error;
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
    }
}