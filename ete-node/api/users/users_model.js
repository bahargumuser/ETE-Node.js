const db = require("../../data/db-config");

const insertUser = async (input) => {
    await db("Users").insert(input)
    return "New User :)"
}
const findUser = async (input) => {
    return await db("Users").where("email", input.email).first();

}
const findIdUser = async (input) => {
    return await db("Users").where("user_id", input.user_id).first();

}

const deleteUser = async (input) => {
    return await db("Users").where("user_id", input.user_id).del()
}
module.exports = {findIdUser,
    insertUser, findUser, deleteUser
}