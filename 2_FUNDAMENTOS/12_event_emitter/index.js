const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

//criando o evento a ser execultado
eventEmitter.on('start', () => {
  console.log('Durante')
})

console.log('Antes')

//disparando o evento
eventEmitter.emit('start')

console.log('Depois')
