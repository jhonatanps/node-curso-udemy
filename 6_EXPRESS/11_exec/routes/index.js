//importa o express
const express = require('express')
//variavel de esecução do express router
const router = express.Router()

//serve para pegar os caminho das paginas
const path = require('path')

// variavel que execulta o joiun path - pega o caminho e o nome do caminho no diretorio
const basePath = path.join(__dirname, '../templates')

//pego a rota -> passando o res que e a resposta -> pegando o caminho do diretorio da pagina index
router.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

router.get('/:id', (req, res) => {
  res.sendFile(`${basePath}/project.html`)
})

module.exports = router
