import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database"
import User  from './UserModel';
import Access from './AccessModel';
class UserAccess extends Model {
}

UserAccess.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey: true,
    }
   
  },
  {
    tableName: 'User_Access',
    timestamps:false,
    sequelize, 
  },
);

User.hasMany(UserAccess);
UserAccess.belongsTo(User);

Access.hasMany(UserAccess);
UserAccess.belongsTo(Access);

// (async()=>{
//   await UserAccess.sync({alter:true});
//   console.log("user access model working")
// })();
export default UserAccess;