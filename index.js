const bedrock = require('bedrock-protocol')
const cfg = require('./config.json')
const { rand, chance } = require('./utils/random')
const { delay, randomDelay } = require('./utils/delay')

const idle = require('./behaviors/idle')
const move = require('./behaviors/movement')
const cam = require('./behaviors/camera')
const chat = require('./behaviors/chat')

let client

function connect () {
  client = bedrock.createClient({
    host: cfg.host,
    port: cfg.port,
    username: cfg.username,
    offline: cfg.offline
  })

  client.on('spawn', async () => {
    console.log('✅ Joined Bedrock server')

    while (true) {
      try {
        if (chance(cfg.human.idleChance)) await idle(client)
        if (chance(cfg.human.moveChance)) await move(client)
        if (chance(cfg.human.cameraChance)) await cam(client)
        if (cfg.chat.enabled && chance(cfg.chat.chance)) await chat(client, cfg.chat.replies)

        await randomDelay(cfg.human.minDelay, cfg.human.maxDelay)
      } catch (e) {
        console.log('⚠️ Loop error, continuing...')
        await delay(2000)
      }
    }
  })

  client.on('disconnect', async () => {
    console.log('❌ Disconnected, retrying...')
    await randomDelay(cfg.reconnect.min, cfg.reconnect.max)
    connect()
  })

  client.on('error', () => {})
}

connect()
