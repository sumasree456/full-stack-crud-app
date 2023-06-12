
import Access from "../models/AccessModel";
import UserAccess from "../models/UserAccessModel";

export const getAccess=async(req:any,res:any)=>{
    try{
      const response=await Access.findOne({where:{accessName:"cafeteria"},include:[{model:UserAccess}]});
      res.status(200).json(response)
    }catch (e) {
         console.log("sorry")
    }
}

export const getAccessById=async(req:any,res:any)=>{
    try{
      const response=await Access.findAll({
        where:{
            id:req.params.id
        }
      });
      res.status(200).json(response)
    }catch (e) {
         console.log("sorry")
    }
}

export const createAccess=async(req:any,res:any)=>{
    try{
      await Access.create(req.body);
      res.status(201).json({msg:"user created"})
    }catch (e) {
        res.status(500).json({message:"access controller error"})
    }
}
export const updateAccess = async(req:any, res:any) =>{
    try {
        await Access.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (e) {
        console.log("sorry");
    }
}

export const deleteAccess = async(req:any, res:any) =>{
    try {
        await Access.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (e) {
        console.log("sorry");
    }
}