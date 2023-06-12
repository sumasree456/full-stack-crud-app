import express from "express"
import cors from "cors";
import UserRoute from "../backend/routes/UserRoute"
import OrgRoute from "../backend/routes/OrgRoute"
import AccessRoute from "../backend/routes/AccessRoute"
import UserAccessRoute from "../backend/routes/UserAccessRoute"
const app=express();
app.use(cors())
app.use(express.json());
app.use(UserRoute)
app.use(OrgRoute)
app.use(AccessRoute)
app.use(UserAccessRoute)





app.listen(9000,()=>{
    console.log(`server is running up at localhost:9000`)
})