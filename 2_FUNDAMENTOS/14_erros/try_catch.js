const x = 10

try {
  x = 2
} catch (err) {
  console.log(`Erro: ${err} `)
  console.log('Variavel x e uma constante e não pode ter seu conteudo auterado')
}
