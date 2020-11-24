var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var codeRes = {
        "img": ["http://localhost:3000/public/banner.png"],
        "message": "会员未登录",
        "data": {}
    }
    res.send(codeRes);
});
module.exports = router;
