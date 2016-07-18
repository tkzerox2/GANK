var express = require('express')
  , router = express.Router()

var example = require('../../services/usermanagement/Example');

// Car brands page
router.get('/brands', function(req, res) {
  res.send('Audi, BMW, Mercedes')
})

// Car models page
router.get('/models', function(req, res) {
  res.send('Audi Q7, BMW X5, Mercedes GL')
})

router.post('/test', function(req, res) {
  res.json(example.findAll());
})

module.exports = router
