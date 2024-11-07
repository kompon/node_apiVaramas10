const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_url: {
        type: DataTypes.TEXT,
    },
    createdat: {  // เปลี่ยนจาก createdAt เป็น createdat
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedat: {  // เปลี่ยนจาก updatedAt เป็น updatedat
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'users',
    timestamps: false,
});

module.exports = User;
