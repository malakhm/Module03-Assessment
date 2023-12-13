import { DataTypes } from "sequelize";
import sequelize from "../Config/conn.js";



const Admin = sequelize.define("admin", {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false
  },
});
Admin.sync();
export default Admin;
