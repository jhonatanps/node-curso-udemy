const { Router } = require('express')
const express = require('express')
const router = express.Router()
const path = require('path')

//pega o nome do diretorio e o caminho da pasta
//para buscar a pasta de templates voltar uma pasta por isso o ../
const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário e ${name} e ele tem ${age} anos`)
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  // leitura da tabela users, resgata um usuário do banco

  console.log(`Estamos buscando pelo usuário: ${id}`)

  res.sendFile(`${basePath}/users.html`)
})

module.exports = router
