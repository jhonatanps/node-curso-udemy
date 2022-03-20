//por conveção sempre criar a variavel com o mesmo nome do modulo
//pegando argumento do terceiro elemento do array
// externo
const minimist = require('minimist')

//interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b)
