const {sequelize}= require('../db');
const {DataTypes} = require('sequelize');
const {Posts}= require('./Task.js')

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    }, 
   email:{
        type: DataTypes.STRING,
        allowNull: false,
   }
})
Users.hasMany(Posts, {foreignKey: 'user_id', sourceKey: 'id'});
Posts.belongsTo(Users, {foreignKey: 'user_id', targetKey: 'id'});

module.exports={
    Users,
}