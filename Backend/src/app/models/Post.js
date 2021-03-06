const conn = require('../../database/index');
const { Model , Sequelize, DataTypes } = require('sequelize');
const User = require('./User');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    uuid:{
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING(255),
        allowNull: true
    },
    image:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description:{
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    freezeTableName: true,
    sequelize: conn,
    modelName: "post"
})

User.hasMany(Post);
Post.belongsTo(User, {foreignKey: "uuid", as: "fk_uuid"});

Post.sync();

module.exports = Post;