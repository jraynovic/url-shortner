const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database')

class Link extends Model {}

Link.init({
    
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    url:{
      type: DataTypes.STRING
    },
    slug:{
        type: DataTypes.STRING,
        unique: true
    }
},{
   sequelize,
   modelName: 'links'
})

module.exports = Link