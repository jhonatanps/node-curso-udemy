const express = require('express')
const exphbs = require('express-handlebars')

//inicializando o express
const app = express()

//chamado o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  const itens = ['Item a', 'Item b', 'Item c']

  res.render('dashboard', { itens })
})

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a parender Node.js.....',
    comments: 1
  }

  res.render('blogpost', { post })
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
