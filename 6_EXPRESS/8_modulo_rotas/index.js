const express = require('express')
const app = express()
const port = 3000 //variável de ambiente

const path = require('path')

const users = require('./users')

//ler o body
app.use(
  express.urlencoded({
    extended: true
  })
)

//converte o body em json
app.use(express.json())

//pega o nome do diretorio e o caminho da pasta
const basePath = path.join(__dirname, 'templates')

app.use('/users', users)

//raiz
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

//esculta na porta
app.listen(port, () => {
  console.log(`Aplicacao rodando na porta ${port}`)
})
