
const { Router } = require("express");

const CompaniesModel = require("../models/CompaniesModel.js")

const CompaniesRouter = Router();

CompaniesRouter.post("/createCompany", (req, res) => {
    
    let { companyInfo } = req.body;

    CompaniesModel.create(companyInfo).then( companyData => {
        if (companyData) {
            res.status(201).json(companyData);
        }
    }).catch(err => {
        res.status(500).json(err);
    })

})

module.exports = CompaniesRouter;
