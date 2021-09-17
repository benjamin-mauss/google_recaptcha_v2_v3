var express = require('express');
var router = express.Router();
var request = require("request")
require('dotenv').config()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});

});

router.get('/v2', function(req, res, next) {
  res.render('v2', { title: 'Express', recaptcha_public_key: process.env.recaptcha_public_key_v2});

});

router.get('/v3', function(req, res, next) {
  res.render('v3', { title: 'Express', recaptcha_public_key: process.env.recaptcha_public_key_v3});

});

router.post('/v2', function(req, res) {
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
  {
    return res.json({"responseError" : "something goes wrong"});
  }
  hcaptcha = encodeURIComponent(req.body['g-recaptcha-response'])
  const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.recaptcha_secret_key_v2 + "&response=" + hcaptcha + "&remoteip=" + req.ip;
 
  request(verificationURL,function(error,response,body) {
    body = JSON.parse(body);
 
    if(body.success !== undefined && !body.success) {
      return res.json({"responseError" : "Captcha verification failed"});
    }
    res.json({"responseSuccess" : "Success"});
  });
});

router.post('/v3', function(req, res) {
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
  {
    return res.json({"responseError" : "something goes wrong"});
  }
  hcaptcha = encodeURIComponent(req.body['g-recaptcha-response'])
  const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.recaptcha_secret_key_v3 + "&response=" + hcaptcha + "&remoteip=" + req.ip;
 
  request(verificationURL,function(error,response,body) {
    body = JSON.parse(body);
    console.log(body)
    if(body.success !== undefined && !body.success) {
      return res.json({"responseError" : "Captcha verification failed"});
    }
    
    res.json({"responseSuccess" : "Success"});
  });
});
 

module.exports = router;
