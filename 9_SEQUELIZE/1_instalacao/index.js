const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const app = express()

//intercepta os dados
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('Rodando na porta 3000')
})
