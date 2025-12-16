const { rand } = require('../utils/random')
const { randomDelay } = require('../utils/delay')

module.exports = async (client) => {
  client.queue('player_look', {
    yaw: rand(-180, 180),
    pitch: rand(-60, 60),
    on_ground: true
  })

  await randomDelay(500, 2000)
}
