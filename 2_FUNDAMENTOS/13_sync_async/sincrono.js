const fs = require('fs')

console.log('Inicio')

//cria e escreve no arquivo
fs.writeFileSync('arquivo.txt', 'oi')

//espera o fim da execução para partir para proxima linha.
console.log('Fim')
