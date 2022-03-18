//regatando argumentos passaores via linda de comando

//.argv e um array de elementos
console.log(process.argv)

//usando a função slice que pega o indice do array
const args = process.argv.slice(2)

console.log(args)

//compondo uma string usando o argumento resgatado, dividindo o argumento em partes usando o = como marcador
const nome = args[0].split('=')[1]

//mostrando a string composta.
console.log(nome)

const idade = args[1].split('=')[1]

console.log(idade)

//para inserir variaveis dentro do texto sempre usar o ${variavel} entre crases
console.log(`O nome dele é ${nome} e ele tem ${idade} anos!`)
