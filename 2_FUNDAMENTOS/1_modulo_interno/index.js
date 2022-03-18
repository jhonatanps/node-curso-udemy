//passando meu modulo interno para uma variavel -> posso passar o caminho sem expecificar o tipo do arquivo
const meuModulo = require('./meu_modulo')
//no node posso simplificar a chamada do modulo -> passando ela pra um variavel
const soma = meuModulo.soma

soma(2, 3)
soma(5, 10)
