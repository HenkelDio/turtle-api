
const fieldsVerification = require("../src/tools/fieldsVerification.js");

const { Router } = require("express");

const StudentsModel = require("../models/StudentsModel.js");

const Students = Router();

Students.post("/createStudent", (req, res) => {

    let studentInfo = req.body;
    
    fieldsVerification(studentInfo, StudentsModel.getAttributes());

    StudentsModel.findOrCreate({ where: { student_cpf: studentInfo.student_cpf }, defaults: studentInfo })
        .then(studentData => {
            let [studentInformation, created] = studentData;
            res.status(201).json({ studentInformation, created });
        })
        .catch(err => {
            res.status(500).json(err)
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