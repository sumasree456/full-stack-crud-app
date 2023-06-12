import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database"
class Access extends Model {
}

Access.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey: true,
    },
    accessName: {
      type: DataTypes.STRING(128),
      allowNull: false,
    }
  },
  {
    tableName: 'Access',
    timestamps:false,
    sequelize, 
  },
);
// (async()=>{
//   await sequelize.sync({alter:true});
//   console.log("acess model fine")
// })();

export default Access;