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