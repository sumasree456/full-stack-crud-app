import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database"
import Org from './OrgModel';
class User extends Model {
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    timestamps:false,
    sequelize, 
  },
);

Org.hasMany(User)
User.belongsTo(Org)
sequelize.sync({alter:true})
// let user:any,org:any;
// (async()=>{
//   await sequelize.sync({alter:true})
// .then(()=>{
//     return Org.findOne({where:{ orgName:"infosys"} })
//   }).then((data)=>{
//      org=data;
//      return User.findAll({
//       where:{org:"infosys"}
//      });
//   }).then((data)=>{
//     user=data;
//     org.addUser(user)
//   }).then((data)=>{
//     console.log(data)
//   }).catch((e)=>{
//     console.log(e)
//   })
// })();
export default User;