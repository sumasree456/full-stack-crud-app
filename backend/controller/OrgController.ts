import Org from "../models/OrgModel";

export const getOrg=async(req:any,res:any)=>{
    try{
      const response=await Org.findAll();
      res.status(200).json(response)
    }catch (e) {
         console.log("sorry")
    }
}

export const getOrgById=async(req:any,res:any)=>{
    try{
      const response=await Org.findAll({
        where:{
            id:req.params.id
        }
      });
      res.status(200).json(response)
    }catch (e) {
         console.log("sorry")
    }
}

export const createOrg=async(req:any,res:any)=>{
    try{
      await Org.create(req.body);
      res.status(201).json({msg:"user created"})
    }catch (e) {
        res.status(500).json({message:"error"})
    }
}
export const updateOrg = async(req:any, res:any) =>{
    try {
        await Org.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (e) {
        console.log("sorry");
    }
}

export const deleteOrg = async(req:any, res:any) =>{
    try {
        await Org.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Org Deleted"});
    } catch (e) {
        console.log("sorry");
    }
}