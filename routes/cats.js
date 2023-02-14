const router = require('express').Router()
// Line below in ES6 was import * as catsCtrl from '../controllers/cats.js'
const catsCtrl = require('../controllers/cats.js')


router.get('/', catsCtrl.index)
router.get('/:id', catsCtrl.show)
router.post('/', catsCtrl.create)
router.put('/:id', catsCtrl.update)
router.delete('/:id', catsCtrl.delete)



module.exports = router