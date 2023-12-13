const { error } = require("console");
const connection = require("../db/db");
const { json } = require("body-parser");


exports.getPrograms = (req, res) =>{
    const data = req.body;
    connection.query( 'SELECT * FROM university_programs', (error, results) =>{
        if(error){
            console.log("Error message", error);
            res.status(500).json({ message: 'Error fetching data' });
            return;
        }
        res.json(results);
    });
};
