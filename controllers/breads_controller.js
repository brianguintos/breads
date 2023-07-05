const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index', {

      breads: Bread,
    })
})

module.exports = breads

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  const index = req.params.arrayIndex
  res.send(Bread[index])
})
