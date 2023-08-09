
const fieldsVerification = require("../src/tools/fieldsVerification");

const { Router } = require("express");

const CompaniesModel = require("../models/CompaniesModel.js")

const CompaniesRouter = Router();

CompaniesRouter.post("/createCompany", (req, res) => {
    let { company_cnpj } = req.body;

    let verification = fieldsVerification("POST", req.body, CompaniesModel.getAttributes());

    if (verification.error) {
        res.status(500).json(verification);
    } else {
        CompaniesModel.findOrCreate({ where: { company_cnpj }, defaults: req.body })
            .then(companyData => {
                let [companyInfo, created] = companyData;

                res.status(201).json({ companyInfo, created });
            })
            .catch(err => {
                res.status(500).send(err)
            })
    }

})

CompaniesRouter.get("/getCompanies", (req, res) => {
    CompaniesModel.findAll().then(companies => {
        res.status(200).json(companies)
    })
})

CompaniesRouter.put("/editCompany", (req, res) => {
    let { company_id } = req.body;
    let companyInfo = req.body;

    if (company_id) {
        delete companyInfo.company_id;

        let verification = fieldsVerification("PUT", companyInfo, CompaniesModel.getAttributes());

        if (verification.error) {
            res.status(400).json(verification);
        } else {
            CompaniesModel.update(companyInfo, { where: { company_id } })
                .then(_ => {
                    res.status(200).json({ "done": true });
                })
                .catch(err => {
                    res.status(500).json({ "done": false, err });
                })

        }
    } else {
        res.status(400).json({ "error": "company_id required" })
    }
})

CompaniesRouter.delete("/deleteCompany", (req, res) => {
    let { company_id } = req.body;

    if (company_id) {
        CompaniesModel.destroy({ where: { company_id } }).then(wasDeleted => {
            res.status(200).json({ "wasDeleted": !!wasDeleted })
        })
    } else {
        res.status(400).json({ "error": "company_id required" });
    }
})

module.exports = CompaniesRouter;
