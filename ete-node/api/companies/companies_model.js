const db = require("../../data/db-config");

const insertNewCompanies = async (input) => {
    await db("Companies")
    return "New Companies Add :)"
}
const findCompany = async (input) => {
    return await db("Companies").where("company_id",input.company_id)  
}
const deleteCompany = async (input) => {
    return await db("Companies").where("company_id",input.company_id).del()
}
const updateCompany = async (input) => {
    return await db("Companies").where("company_id",input.company_id).update(input)
}
const getCompany = async (input) => {
    return await db("Companies")
}
module.exports = {
    insertNewCompanies, findCompany, deleteCompany, updateCompany, getCompany 
}