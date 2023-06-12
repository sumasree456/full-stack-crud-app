import {Sequelize } from "sequelize";
const sequelize= new Sequelize("signup","root","suma",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(()=>{
    console.log("yes")
})

export default sequelize;