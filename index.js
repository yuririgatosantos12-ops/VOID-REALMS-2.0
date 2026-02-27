const mineflayer = require('mineflayer')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Servidor web rodando!')
})

app.listen(3000, () => {
  console.log('Servidor web rodando!')
})

function criarBot() {
  const bot = mineflayer.createBot({
    host: 'voidrealmsss.falixsrv.me',
    port: 24797,
    username: 'VoidAFK',
    version: '1.20.4'
  })

  bot.on('login', () => {
    console.log('Bot entrou no servidor!')
  })

  bot.on('spawn', () => {
    console.log('Bot spawnou!')
  })

  bot.on('end', () => {
    console.log('Bot desconectado! Reconectando em 5s...')
    setTimeout(criarBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Erro:', err)
  })
}

criarBot()
