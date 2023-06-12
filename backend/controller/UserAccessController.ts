import UserAccess from "../models/UserAccessModel";
import User from "../models/UserModel";
import Access from "../models/AccessModel";

export const getUserAccess=async(req:any,res:any)=>{
    try{
      const response=await UserAccess.findAll({
        include:[{
            model:User,
        }],
      });
      res.status(200).json(response)
    }catch (e) {
         console.log("sorry")
    }
}

export const getUserAccessById=async(req:any,res:any)=>{
    try{
      const response=await UserAccess.findAll({
        where:{
            id:req.params.id
        }
      });
      res.status(200).json(response)
    }catch (e) {
         console.log("sorry")
    }
}

export const createUserAccess=async(req:any,res:any)=>{
    try{
        // let setUserID:any;
        //  setUserID = await User.findOne({ where: { id: 1 } })
        //  let setAccessID:any;
        //  setAccessID = await Access.findOne({ where: { accessName: "cafeteria" }  })
 
        //       let userAccessEntity:any;
        //       userAccessEntity = await UserAccess.create();
        //       await userAccessEntity?.setUser(setUserID);
        //       await userAccessEntity?.setAccess(setAccessID);
      res.status(201).json({msg:"user created"})
    }catch (e) {
        res.status(500).json({message:"error"})
    }
}
export const updateUserAccess = async(req:any, res:any) =>{
    try {
        await UserAccess.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (e) {
        console.log("sorry");
    }
}

export const deleteUserAccess = async(req:any, res:any) =>{
    try {
        await UserAccess.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (e) {
        console.log("sorry");
    }
}