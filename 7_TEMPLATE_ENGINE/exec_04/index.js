const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
  {
    id: '1',
    title: 'produto a',
    category: 'seco',
    theAmount: '50'
  },
  {
    id: '2',
    title: 'produto b',
    category: 'molhado',
    theAmount: '30'
  },
  {
    id: '3',
    title: 'produto c',
    category: 'vestuario',
    theAmount: '10'
  },
  {
    id: '4',
    title: 'produto d',
    category: 'jardinagem',
    theAmount: '5'
  }
]

app.get('/', (req, res) => {
  res.render('home', { products })
})

app.get('/products/:id', (req, res) => {
  const product = products[parseInt(req.params.id) - 1]

  res.render('products', { product })
})

app.listen(3000, () => {
  console.log('App funcionando!')
})
