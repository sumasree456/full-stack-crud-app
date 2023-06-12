import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database"
class Org extends Model {
}

Org.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey: true,
    },
    orgName: {
      type: DataTypes.STRING(128),
      allowNull: false,
    }
  },
  {
    tableName: 'Organization',
    timestamps:false,
    sequelize, 
  },
);

// (async()=>{
//   await sequelize.sync({alter:true});
//   console.log("orgmodel fine")
// })();
export default Org;