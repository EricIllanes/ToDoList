const {sequelize}= require('../db');
const {DataTypes} = require('sequelize');
const Posts = sequelize.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    content:{
        type: DataTypes.STRING,
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})

module.exports={
    Posts
}