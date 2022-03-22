const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 4000

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true)
  const filename = q.pathname.substring(1)

  if (filename.includes('html')) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      })
    }
  } else {
    fs.readFile('404.html', function (err, data) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  }
})
//funçao de callbeck é uma função que é executada quando ocorre algum evento!

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
