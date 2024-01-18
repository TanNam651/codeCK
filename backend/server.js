require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middleware/verifyJWT');

const PORT = process.env.PORT || 3500;

connectDB();

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/auth', require('./routes/auth'));
app.use('/register', require('./routes/register'));
app.use('/logout', require('./routes/logout'));

// app.use(verifyJWT);
app.use('/product', require('./routes/product'));
app.use('/category', require('./routes/category'));

mongoose.connection.once('open', () => {
  console.log('Connect to MongoDB');
  app.listen(PORT, () => console.log(`Server running with PORT ${PORT}`));
})