const express = require('express')
const app = express()
const port = 3000 //variável de ambiente

const path = require('path')

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

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário e ${name} e ele tem ${age} anos`)
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id

  // leitura da tabela users, resgata um usuário do banco

  console.log(`Estamos buscando pelo usuário: ${id}`)

  res.sendFile(`${basePath}/users.html`)
})

//raiz
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

//esculta na porta
app.listen(port, () => {
  console.log(`Aplicacao rodando na porta ${port}`)
})
