//por conveção sempre criar a variavel com o mesmo nome do modulo
const minimist = require('minimist')

//pegando argumento do terceiro elemento do array
const args = minimist(process.argv.slice(2))

console.log(args)

//passando o argumento para uma variavel
const nome = args['nome']
console.log(nome)

const profisao = args['profissao']

console.log(nome, profisao)

console.log(`O nome dele e ${nome} é ele e ${profisao}`)
