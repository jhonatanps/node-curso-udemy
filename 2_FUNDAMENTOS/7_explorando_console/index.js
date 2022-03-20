// mais de um valor
const x = 10
const y = 'texto'
const z = [1, 2]

console.log(x, y, z)

// contagem de vezes que foi impressa a variavel
console.count(`imprimindo ${x}`)
console.count(`imprimindo ${x}`)
console.count(`imprimindo ${x}`)
console.count(`imprimindo ${x}`)
console.count(`imprimindo ${x}`)

//usando a concatenação como no C, convetendo em string
console.log('O texto e %s', y)

//lipando o console usando uma arrow fanction
setTimeout(() => {
  console.clear()
}, 2000)
