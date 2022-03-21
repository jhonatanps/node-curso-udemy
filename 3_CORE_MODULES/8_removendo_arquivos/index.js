const fs = require('fs')

fs.unlink('arquivo.txt', function (err) {
  if (err) {
    console.log(err, 'Não tem arquivo')
    return
  }
  console.log('Arquivo removido!')
})
