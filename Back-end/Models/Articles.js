import sequelize from "../Config/conn.js"
import { DataTypes } from "sequelize"

const Article = sequelize.define("articles", {

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    category :{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: DataTypes.STRING,
        defaultValue:""
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  
   
})
Article.sync()
export default Article