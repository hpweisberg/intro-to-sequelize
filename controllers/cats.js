const { Cat } = require('../models')

const create = async (req, res) => {
  try {
    const cat = await Cat.create(req.body)
    // console log with toJSON() to get only the model back. no extra meta data
    console.log(cat.toJSON())
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
}