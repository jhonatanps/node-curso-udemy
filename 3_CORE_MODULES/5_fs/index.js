const http = require('http')
const fs = require('fs')

const port = 4000

const server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
})

//funçao de callbeck é uma função que é executada quando ocorre algum evento!

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
