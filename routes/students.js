
const { Router } = require("express");

const StudentsModel = require("../models/AdminsModel.js");

const Students = Router();

Students.post("/createStudents", (req, res) => {
    let { studentInfo } = req.body;

    StudentsModel.create(studentInfo).then( studentData => {
        res.status(201).json(studentData);
    }).catch( err => {
        res.status(500).json(err)
    })

})

module.exports = Students;
