const fs = require('fs') // file system

//ler arquivo                   function anonima
fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data)
})
