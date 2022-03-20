//inportando modulo externo
//chalk so funciona na versao 2.4.1 'npm i chalk@2.4.1'
const chalk = require('chalk')

const nota = 6

if (nota >= 7) {
  console.log(chalk.green.bold('Aprovado'))
} else {
  console.log(chalk.bgRed.black('Reprovado'))
}
