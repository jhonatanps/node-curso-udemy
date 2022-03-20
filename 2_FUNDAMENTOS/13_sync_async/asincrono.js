const fs = require('fs')

console.log('Início')

//cria o arquivo passando um funçao anonima para captura do erro, enquanto o arquivo e criado o programa segue
fs.writeFile('arquivo.txt', 'oi', function (err) {
  setTimeout(function () {
    console.log('Arquivo criado!')
  }, 1000)
})

console.log('Fim')
