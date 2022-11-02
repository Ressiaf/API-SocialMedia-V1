const express = require('express')
const router = express.Router()

const userController = require("../../controllers/users-controller")

router
        .get( "/", userController.getAllUsers )
        .get( "/:id", userController.getSelectedUser )
        .post("/" , userController.createNewUser)
        .put("/:id", userController.updateUser)
        .delete("/:id" , userController.deleteUser)

module.exports = router