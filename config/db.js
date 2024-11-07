const { Sequelize } = require('sequelize');

// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล PostgreSQL
const sequelize = new Sequelize('postgres://default:GaxfzM4O6boA@ep-nameless-flower-a1612bki.ap-southeast-1.aws.neon.tech:5432/verceldb', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

// ฟังก์ชันสำหรับตรวจสอบการเชื่อมต่อกับฐานข้อมูล
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectDB();

module.exports = sequelize;
