const { error } = require("console");
const connection = require("../db/db");
const { json } = require("body-parser");


exports.getPrograms = (req, res) =>{
    const data = req.body;
    connection.query( 'SELECT * FROM university_programs', [data] ,
    (error, results)  =>{
        if(error){
            console.log("Error message", error);
            res.status(500).json({ message: 'Error fetching data' });
            return;
        }
        res.json(results);
    });
};

exports.getModules = (req, res) =>{
    const data = req.body;
    connection.query(
        "SELECT * FROM university_program_modules WHERE university_program_id = ?", [data],
        (error, results) => {
            if (error) {
                console.error("Error fetching sample data:", error);
                res.json(results);
                return;
              }
              res.json(results);
        }
    )
}