const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

//configuração de conexao com o banco de dados
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nodemysql'
})

//conectando ao banco
conn.connect(function (err) {
  if (err) {
    console.log(err)
  }
  console.log('Conectou ao MySQL!')

  app.listen(3000, () => {
    console.log('Rodando na porta 3000')
  })
})
