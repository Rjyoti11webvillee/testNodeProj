var router = require("express").Router();
var usercontroller = require('../controller/user.controller');

router.post('/insertUser', usercontroller.insertUser);
router.get('/getAllUser', usercontroller.getAllUser);
router.get('/greetings', usercontroller.greetings);


module.exports = router;