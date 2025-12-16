const bedrock = require('bedrock-protocol')
const { randomDelay } = require('./utils/delay')
const movement = require('./behaviors/movement')
const camera = require('./behaviors/camera')
const idle = require('./behaviors/idle')

const client = bedrock.createClient({
  host: 'IP_HERE',
  port: 19132,
  username: 'TyroxBot',
  offline: true
})

client.on('spawn', async () => {
  console.log('✅ Bot joined (Bedrock)')

  while (true) {
    await idle(client)
    await movement(client)
    await camera(client)
    await randomDelay(4000, 15000)
  }
})

client.on('disconnect', () => {
  console.log('❌ Disconnected, retrying...')
})
