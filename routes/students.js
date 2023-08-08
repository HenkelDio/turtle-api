
const fieldsVerification = require("../src/tools/fieldsVerification.js");

const { Router } = require("express");

const StudentsModel = require("../models/StudentsModel.js");

const Students = Router();

Students.post("/createStudent", (req, res) => {

    let studentInfo = req.body;

    let verification = fieldsVerification("POST", studentInfo, StudentsModel.getAttributes());

    if (verification.error) {
        res.status(500).json(verification);
    } else {
        StudentsModel.findOrCreate({ where: { student_cpf: studentInfo.student_cpf }, defaults: studentInfo })
            .then(studentData => {
                let [studentInformation, created] = studentData;
                res.status(201).json({ studentInformation, created });
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

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

Students.put("/editStudent", (req, res) => {

    let infoToEdit = req.body;
    let { student_id } = infoToEdit;

    if (student_id) {
        delete infoToEdit.student_id;
        
        let verification = fieldsVerification("PUT", infoToEdit, StudentsModel.getAttributes());
        if (verification.error) {
            res.status(500).json(verification)
        } else {
            StudentsModel.update(infoToEdit, { where: { student_id } }).then( studentData => {
                res.status(201).json({ done: true });
            }).catch( err => {
                res.status(500).json({ done: false, err })
            });
        }

    } else {
        res.status(500).json({ "error": "student_id required" })
    }

})

module.exports = Students;