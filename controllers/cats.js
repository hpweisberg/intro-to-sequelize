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

const index = async (req, res) => {
  try {
    const cats = await Cat.findAll()
    res.status(200).json(cats)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const cat = await Cat.findByPk(req.params.id)
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    // We can also update at the instance level.
    // Several fields can be updated at once with the set method,
    // but we will need to save() the instance afterwards.
    const cat = await Cat.findByPk(req.params.id)
    cat.set(req.body)
    await cat.save()
    console.log(cat)
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}

//! This works too, but the other way is eaiser to read and faster
// const update = async (req, res) => {
//   try {
//     const cat = await Cat.update(
//       req.body,
//       { where: { id: req.params.id }, returning: true }
//     )
//     console.log(cat)
//     res.status(200).json(cat)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }

const deleteCat = async(req, res) => {
  try {
    // We can also call destroy on an instance:
    const cat = await Cat.findByPk(req.params.id)
    await cat.destroy()
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteCat
}