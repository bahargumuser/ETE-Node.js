const db = require("../data/db-config");

const insertUser = async (input) => {
    await db("Users").insert(input)
    return "New User :)"
}
const findUser = async (input) => {
    await db("Users").where("user_id", input.user_id)
    return "That's Products"
}
const deleteUser = async (input) => {
    return await db("Users").where("user_id", input.user_id).del()
}
module.exports = {
    insertUser, findUser, deleteUser
}