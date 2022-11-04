const userService = require("../services/userService")

const getAllUsers = ( req , res ) =>{
    const allUsers = userService.getAllUsers()
    res.status(200).json( { status:"ok", data:allUsers } )
}

const getSelectedUser=  ( req , res , next ) => {
    try { 
        const { id } = req.params
        res.status(200).json( { status:"ok", id:Number(id) } )
    } catch (error) { 
        //content
    }
};

const createNewUser=  ( req , res , next ) => {
    try { 
        const { name , age , email , country } = req.body
        if(!name || !age || !email || !country ) {
            res.status(400).json({ 
                status: "error" , 
                error: "You must fill all the fields" , 
                reason: "Fields: name , email , age . or country are empty"
            })
        } 
        const newUser = {
            name: name,
            age: age,
            email: email,
            country: country
        }
        res.status(201).json({msg: "user successfully created"})
    } catch (error) { 
        //content
    }
};
const updateUser=  ( req , res , next ) => {
    try { 
        const { id } = req.params
        res.status(200).json({msg: "user successfully updated"})
    } catch (error) { 
        //content
    }
};

const deleteUser =  ( req , res , next ) => {
    try { 
        const { id } = req.params
        res.json({msg: "user successfully deleted"})
    } catch (error) { 
        //content
    }
};

module.exports = {
    getAllUsers,
    getSelectedUser,
    createNewUser,
    updateUser,
    deleteUser
}