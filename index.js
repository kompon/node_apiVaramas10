const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// กำหนดให้โฟลเดอร์ public เป็น static เพื่อให้สามารถเข้าถึงไฟล์จากภายนอกได้
app.use('/public', express.static('public'));

// ใช้เส้นทางที่กำหนดไว้
app.use('/api', userRouter);
app.use('/api', productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
