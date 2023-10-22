const router = require("express").Router();
const { insertNewCompanies, deleteCompany,updateCompany ,findCompany,getCompany} = require("./companies_model");
const {companyIsExist} = require("./companies_middleware")

router.get("/", async (req,res, next) => {
    try {
        const data = await getCompany()
        res.json(data);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req,res, next) => {
    try {
        let model = {
            company_name: req.body.company_name,
            company_legal_number: req.body.company_legal_number,
            incorporation_country: req.body.incorporation_country,
            website_url: req.body.website_url,
            company_status:req.body.company
        }
        const add = insertNewCompanies(model);
        res.status(201).json({message: "Cong New Company :)", add});
    } catch (error) {
        next(error);
    }
});

router.post("/update", companyIsExist , async (req,res, next) => {
  try {
    const existingCompany = await findCompany(req.body);
    let model = {
        company_id: req.body.company_id,
        company_name: req.body.company_name || existingCompany.company_name,
        company_legal_number: req.body.company_legal_number || existingCompany.company_legal_number,
        incorporation_country: req.body.incorporation_country || existingCompany.incorporation_country,
        website_url: req.body.website_url || existingCompany.website_url,
        company_status:req.body.company || existingCompany.company_status
    };
    const updateC = await updateCompany(model);
    res.status(201).json({message: "Update OK :)", updateC})
  } catch (error) {
    next(error);
  }
});

router.delete("/", companyIsExist, async (req,res, next) => {
    try {
        const deleteC = deleteCompany(req.body);
        res.status(401).json({message: "See You Next Time :')", deleteC})
    } catch (error) {
        next(error);
    }
});
module.exports = router;