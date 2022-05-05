const express = require('express')
const exphbs = require('express-handlebars')

//inicializando o express
const app = express()

//chamado o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/', (req, res) => {
  const user = {
    name: 'jhonatan',
    surname: 'padua'
  }

  const texto = 'Teste'

  const auth = false

  const approved = false

  res.render('home', { user: user, texto, auth, approved })
})

app.listen(3000, () => {
  console.log('App funcionando!')
})
