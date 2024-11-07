const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
    proid: {  // เปลี่ยนจาก proId เป็น proid
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    proname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
    },
    authors: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
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
    tableName: 'products',
    timestamps: false,
});

module.exports = Product;
