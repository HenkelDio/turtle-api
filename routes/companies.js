
const { Router } = require("express");

const CompaniesModel = require("../models/CompaniesModel.js")

const CompaniesRouter = Router();

CompaniesRouter.post("/createCompany", (req, res) => {

    let companyInfo = req.body;

    CompaniesModel.findOrCreate({ where: { company_register: companyInfo.company_register }, defaults: companyInfo })

        .then(companyData => {
            let [companyInformation, created] = companyData;
            res.status(201).json({ companyInformation, created });
        })

        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });

})

module.exports = CompaniesRouter;
