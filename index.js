const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
dotenv.config();

mongoose.set('strictQuery', false);
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB Connection Successfull!'))
	.catch((err) => {
		console.log(err);
	});

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log('Backend server is running!');
});
