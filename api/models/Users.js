const {sequelize}= require('../db');
const {DataTypes} = require('sequelize');
const {Tasks}= require('./Tasks.js')

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
Users.hasMany(Tasks, {foreignKey: 'user_id', sourceKey: 'id'});
Tasks.belongsTo(Users, {foreignKey: 'user_id', targetKey: 'id'});

module.exports={
    Users,
}