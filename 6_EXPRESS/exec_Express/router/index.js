const { Router } = require('express')
const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/form.html`)
})

router.post('/save', (req, res) => {
  console.log(req.body)

  const name = req.body.name
  const login = req.body.login

  console.log(`O nome do usuário e ${name} login e ${login}`)
})

module.exports = router
