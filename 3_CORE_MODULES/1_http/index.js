const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.write('Oi HTTP')
  res.end()
})

//funçao de callbeck é uma função que é executada quando ocorre algum evento!

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
