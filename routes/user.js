const router = require('express').Router();

router.get('/usertest', (req, res) => {
	res.send('user test is success');
});

router.post('/userposttest', (req, res) => {
	const userName = req.body.userName;
	console.log('userName:', userName);
});

module.exports = router;
