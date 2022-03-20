const inquirer = require('inquirer')

//posso passar um array de perguntas
inquirer
  .prompt([
    {
      name: 'p1',
      message: 'Qual a primeira nota?'
    },
    {
      name: 'p2',
      message: 'Qual a seungo nota?'
    }
  ])
  .then(answers => {
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
    console.log(`A media das duas notas e ${media}`)
  })
  .catch(err => console.log(err))
