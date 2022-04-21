//importe pro express
const express = require('express')
//variavel que execulta o express
const app = express()
const port = 4000

//importo o diretorio de rotas
const projectRoutes = require('./routes')

//possibilito o uso de paginas estaticas
app.use(express.static('public'))

//imprementando o router
app.use('/rota', projectRoutes)

//escultando na porta 4000
app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`)
})
