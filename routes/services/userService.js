var userDAO = require("../dao/userDAO")
async function saveUserService(data) {
    console.log("saveUsemmmmmmmmmmmmmmmmrService")
    const result = await userDAO.saveUserDAO(data);
    return result;
}

async function getUserService() {
    const result = await userDAO.getUserDAO();
    result.forEach((obj) => {
        delete obj.password;
    })
    return result;
}

module.exports = {
    saveUserService,
    getUserService
};