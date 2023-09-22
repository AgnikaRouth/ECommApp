const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//REGISTER
router.post('/register', async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC //secret key
		).toString(),
	});

	try {
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (err) {
		res.status(500).json({ error: 'An internal server error occurred.' });
	}
});

//LOGIN

router.post('/login', async (req, res) => {
	try {
		//mongodb object will be stored in user variable if the username is present
		const user = await User.findOne({ username: req.body.username });

		!user && res.status(401).json('Wrong credentials');

		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASS_SEC
		);
		const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
		originalPassword !== req.body.password &&
			res.status(401).json('Wrong Credentials');

		// create JWT (for update/delete) :
		// values are from mongoDB key names
		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SEC,
			{ expiresIn: '3d' }
		);

		// hide password from the response and pass accessToken !?
		const { password, ...others } = user._doc; //in mongoDB, the data are stored in "_doc" location

		res.status(200).json({ ...others, accessToken });
	} catch (err) {
		res.status(500).json({ error: 'An internal server error occurred.' });
	}
});

module.exports = router;
