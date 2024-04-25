var userDAO = require("../dao/userDAO")
function saveUserService() {
    console.log("saveUsemmmmmmmmmmmmmmmmrService")
    userDAO.saveUserDAO();
}

function getUserService() {

}

module.exports = {
    saveUserService,
    getUserService
};