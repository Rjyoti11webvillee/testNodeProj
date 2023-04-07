var router = require("express").Router();
var usercontroller = require('../controller/user.controller');

router.post('/insertUser', usercontroller.insertUser);
router.get('/getAllUser', usercontroller.getAllUser);
router.get('/greetings', usercontroller.greetings);
router.get('/new_greetings', usercontroller.new_greetings);


module.exports = router;