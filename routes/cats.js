const router = require('express').Router()
// Line below in ES6 was import * as catsCtrl from '../controllers/cats.js'
const catsCtrl = require('../controllers/cats.js')


router.post('/', catsCtrl.create)



module.exports = router