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