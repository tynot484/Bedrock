const { rand } = require('../utils/random')
const { randomDelay } = require('../utils/delay')

module.exports = async (client) => {
  const x = rand(-1, 1)
  const z = rand(-1, 1)
  const jump = Math.random() < 0.25

  client.queue('player_auth_input', {
    move_vector: { x, y: 0, z },
    input_data: {
      jump
    }
  })

  await randomDelay(800, 3000)
}
