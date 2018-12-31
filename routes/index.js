const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
{
	const SesData = req.app.get('SessionData');
	const sid = req.session.id;
	if(!SesData[sid])
		return res.redirect('/login');
	return res.render('index');
});

module.exports = router;