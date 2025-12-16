const { randomDelay } = require('../utils/delay')

module.exports = async (client, replies) => {
  const msg = replies[Math.floor(Math.random() * replies.length)]
  client.write('text', {
    type: 'chat',
    needs_translation: false,
    source_name: client.username,
    message: msg,
    parameters: []
  })

  await randomDelay(2000, 6000)
}
