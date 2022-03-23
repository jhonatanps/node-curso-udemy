// modulos exernos
const inquirer = require('inquirer')
const chalk = require('chalk')

//modulos internos
const fs = require('fs')
const Choices = require('inquirer/lib/objects/choices')

operation()

function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        //criando a lista de opçoes
        choices: [
          'Criar Conta',
          'Consultar Saldo',
          'Depositar',
          'Sacar',
          'Sair'
        ]
      }
    ])
    .then(answer => {
      const action = answer['action']
      if (action === 'Criar Conta') {
        createAccount()
      } else if (action === 'Consultar Saldo') {
        getAccountBalance()
      } else if (action === 'Depositar') {
        deposit()
      } else if (action === 'Sacar') {
        withdraw()
      } else if (action === 'Sair') {
        console.log(chalk.bgBlue.black('Obrigando por usar o Accounts'))
        process.exit()
      }
    })
    .catch(err => console.log(err))
}

// create an account
function createAccount() {
  console.log(chalk.bgGreen.black('Parabés por escolher o nosso banco!'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))

  buildAccount()
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Digite um nome para a sua conta: '
      }
    ]) //answer = responda ou resposta do ususario
    .then(answer => {
      const accountName = answer['accountName']

      console.info(accountName)

      //validando se o diretorio já foi criado
      if (!fs.existsSync('accounts')) {
        //criando diretorio
        fs.mkdirSync('accounts')
      }

      //criando arquivo que servira como bd
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black('Esta conta já existe, ecolha outro nome!')
        )
        buildAccount()
        return
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.log(err)
        }
      )

      console.log(chalk.green('Parabéns, a sua conta foi criada!'))
      operation()
    })
    .catch(err => console.log(err))
}

//add an amount to user account -> adicionar um valor à conta de usuário
function deposit() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
      }
    ])
    .then(answer => {
      const accountName = answer['accountName']

      // verify if account exists - verificar se a conta existe
      if (!checkAccount(accountName)) {
        deposit()
      }

      inquirer
        .prompt([
          {
            name: 'amount',
            message: 'Quanto você deseja depositar'
          }
        ])
        .then(answer => {
          const amount = answer['amount']

          // add an amount -> adicionar um montante
          addAmount(accountName, amount)
          operation()
        })
        .catch(err => console.log(err))
    })
    .catch(error => console.log(err))
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
    return false
  }
  return true
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName)

  if (!amount) {
    console.log(
      chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!')
    )
    return deposit()
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err)
    },
    console.log(
      chalk.green(`Foi depositado o valor de R$${amount} na sua conta`)
    )
  )
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf8',
    flag: 'r'
  })
  return JSON.parse(accountJSON)
}

// show account balance -> ver saldo da conta
function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
      }
    ])
    .then(answer => {
      const accountName = answer['accountName']

      // verify if account exists
      if (!checkAccount(accountName)) {
        return getAccountBalance()
      }

      const accountData = getAccount(accountName)

      console.log(
        chalk.bgBlue.black(
          `Olá, o saldo da sua conta é de R$${accountData.balance}`
        )
      )
      operation()
    })
    .catch(err => console.log(err))
}

// withdraw an amount from user account -> sacar valor da conta
function withdraw() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
      }
    ])
    .then(answer => {
      const accountName = answer['accountName']
      if (!checkAccount(accountName)) {
        return withdraw()
      }

      inquirer
        .prompt([
          {
            name: 'amount',
            message: 'Quanto você deseja sacar?'
          }
        ])
        .then(answer => {
          const amount = answer['amount']

          removeAmount(accountName, amount)
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName)

  if (!amount) {
    console.log(
      chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!')
    )
    return withdraw()
  }

  if (accountData.balance < amount) {
    console.log(chalk.bgRed.black('Valor indisponìvel!'))
    return withdraw()
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err)
    }
  )

  console.log(
    chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`)
  )
  operation()
}
