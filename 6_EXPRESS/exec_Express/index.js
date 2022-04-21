const express = require('express')
const app = express()
const port = 5000

const path = require('path')

const pages = require('./router')

const basePath = path.join(__dirname, 'templates')

//ler o body da requisição
app.use(
  express.urlencoded({
    extended: true
  })
)

//converter em json
app.use(express.json())

//faz funcionar os aquivos staticos
app.use(express.static('public'))

app.use('/cad', pages)

//raiz
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.use(function (req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

// fica ouvindoa porta
app.listen(port, () => {
  console.log(`Aplicacao rodando na porta ${port}`)
})
