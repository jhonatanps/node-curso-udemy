const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      name: 'pNome',
      message: 'Informe seu nome'
    },
    {
      name: 'pIdade',
      message: 'Informe sua idade'
    }
  ])
  .then(answers => {
    if (!answers.pNome || !answers.pIdade) {
      throw new Error('Campos nome e idade são obrigatorios')
    } else if (
      !Number.isInteger(answers.pNome) &&
      Number.isInteger(parseInt(answers.pIdade))
    ) {
      console.log(
        chalk.black.bgYellow(
          `Olá ${answers.pNome} você te uma idade de ${answers.pIdade}`
        )
      )
    } else {
      console.log(
        'Favor não informar numeros no campo nome e nem letras no campo idade'
      )
    }
  })
  .catch(err => {
    console.log(err)
  })
