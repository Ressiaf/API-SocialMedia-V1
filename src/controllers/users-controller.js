const getAllUsers = ( req , res ) =>{
    res.status(200).json({status:"ok"})
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
            res.json({ 
                status: "error" , 
                err: "You must fill all the fields" , 
                reason:"Fields: name , email , age . or country are empty"
            })
        } else {
            // servicio crear usuario
            res.status(201).json({msg: "user successfully created"})
        }
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