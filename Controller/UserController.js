import prisma from "../DB/db.config.js";
export const fetusers = async (req, res) => {
    const users = await prisma.user.findMany({})
    
    return res.json({ status: 200, data: users });
   

}

export const showuser = async (req, res) => {
      
    const userId = req.params.id;
    const User = await prisma.user.findUnique({
        where: {
            id:Number(userId)
        }
    })
    if (!User) {
        return res.json({
            status: 404,
            message:"User not Found!!"
        })
    }
    return res.json({status:200, data:User,message:"user found"})

} 


export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const findUser = await prisma.user.findUnique({
        where: {
            email:email
        }
    })

    if (findUser) {
        return res.json({ status: 400, message: "Email Already exist" })
        
    }
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })

    return res.json({status:200, data:newUser, message:"User created"})

}

export const updateUser =async(req,res)=>{
    const userId = req.params.id 
    const { name, email, password } = req.body;
    await prisma.user.update({
        where: {
            id: Number(userId)
        },
        data: {
            name,
            email,
            password
        }

    })
     return res.json({status:200 ,message: "updated successfully"})

}

export const deleteUser = async (req, res) => {
    const userId = req.params.id 
    await prisma.user.delete({
        where: {
            id: Number(userId)
        }
    })
    return res.json({status: 200, message: "user deleted successfully"})
}