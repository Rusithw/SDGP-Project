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
    }
}