var express = require('express')
  , router = express.Router()

router.use('/usermanagement', require('./usermanagement/authenticationController'))

module.exports = router
