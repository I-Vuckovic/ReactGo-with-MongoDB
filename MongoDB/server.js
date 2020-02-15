const express = require('express');
const connectDB = require('./DB/Conncection');
const app = express();
const cors = require("cors");

connectDB();
app.use(cors());
app.use(express.json({ extended: false }));
app.use('/users', require('./Api/User'));
app.use('/posts', require('./Api/Post'));
app.use('/news', require('./Api/News'));
app.use('/comments', require('./Api/Comments'));
const Port = process.env.Port || 3003;

app.listen(Port, () => console.log('Server started'));
