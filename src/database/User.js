const {PrismaClient} = require("@prisma/client")
const prisma = newPrismaClient()

const getAllUsers = async ( ) => {
    const allUsers =  await prisma.user.findMany()
    return allUsers
} 
// findmany = SELECT * FROM Users  

module.exports = {
    getAllUsers
}