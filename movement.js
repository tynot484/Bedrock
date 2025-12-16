module.exports = async (client) => {
  const actions = ['forward', 'back', 'left', 'right', 'jump']
  const action = actions[Math.floor(Math.random() * actions.length)]

  client.queue('player_auth_input', {
    move_vector: { x: Math.random(), y: 0, z: Math.random() },
    input_data: { [action]: true }
  })
}
