import Org from "../models/OrgModel";
import User from "../models/UserModel";
import Access from "../models/AccessModel";
import UserAccess from "../models/UserAccessModel";

export const allusers=async(req:any,res:any)=>{
    try{
      const response=await User.findAll( { 
        include:[{ 
            model:Org,
        }] 
    });
      res.status(200).json(response)
    }
    catch (e) {
         console.log("sorry")
    }
}

export const getUsers=async(req:any,res:any)=>{
    try{
      const response=await User.findAll({
        include:[{model:Org}]
      }
    );
     
      res.status(200).json(response)
    }catch (e) {
         console.log("sorry")
    }
}

export const getUserById=async(req:any,res:any)=>{
    try{
      const response=await User.findAll({
        where:{
            id:req.params.id
        }
      });
      res.status(200).json(response)
    }catch (e) {
         console.log("sorry")
    }
}

export const createUser=async(req:any,res:any)=>{
    try{
        let userObject = {
            firstName: req.body['firstName'],
            lastName: req.body['lastName'],
            email: req.body['email']
        }
        let org = req.body['org'];
        
        let organisationEntity:any;
        organisationEntity = await Org.findOne({where: {orgName: org}});
    
        let userEntity:any;
        userEntity = await User.create(userObject);
         await userEntity?.setOrg(organisationEntity);

         let reqID = userEntity.id

         let setUserID:any;
         setUserID = await User.findOne({ where: { id: reqID } })
         let setAccessID:any;
         setAccessID = await Access.findOne({ where: { accessName: "cafeteria" }  })
 
              let userAccessEntity:any;
              userAccessEntity = await UserAccess.create();
              await userAccessEntity?.setUser(setUserID);
              await userAccessEntity?.setAccess(setAccessID);
 
      res.status(201).json({msg:"user created"})
    }catch (e) {
        console.log(e)
        res.status(500).json({message:"error"})
        
    }
}
export const updateUser = async(req:any, res:any) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (e) {
        console.log("sorry");
    }
}

export const deleteUser = async(req:any, res:any) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (e) {
        console.log("sorry");
    }
}