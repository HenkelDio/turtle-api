
const { Router } = require("express");

const StudentsModel = require("../models/StudentsModel.js");

const Students = Router();

Students.post("/createStudent", (req, res) => {

    let studentInfo = req.body;

    StudentsModel.findOrCreate({ where: { student_register: studentInfo.student_register }, defaults: studentInfo })
        .then(studentData => {
            let [studentInformation, created] = studentData;
            res.status(201).json({ studentInformation, created });
        })
        .catch( err => {
            res.send(500).json(err)
        })

});

Students.get("/getStudents", (req, res) => {
    StudentsModel.findAll()
        .then(studentsData => {
            if (studentsData.length >= 1) {
                res.status(200).json(studentsData);
            } else {
                res.status(204).json(studentsData);
            }
        })
});


module.exports = Students;
