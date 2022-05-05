const express = require('express')
const exphbs = require('express-handlebars')

//inicializando o express
const app = express()

//configurando o partios
const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

//chamado o handlebars
app.engine('handlebars', hbs.engine)
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

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node.js',
      category: 'JavaScript',
      body: 'Teste',
      comments: 4
    },
    {
      title: 'Aprender Java',
      category: 'Java',
      body: 'Teste',
      comments: 400
    },
    {
      title: 'Aprender C#',
      category: 'C#',
      body: 'Teste',
      comments: 4
    },
    {
      title: 'Aprender Rust',
      category: 'Rust',
      body: 'Teste',
      comments: 4
    }
  ]
  res.render('blog', { posts })
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
