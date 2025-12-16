module.exports.delay = (ms) =>
  new Promise(res => setTimeout(res, ms))

module.exports.randomDelay = (min, max) =>
  new Promise(res => setTimeout(res, Math.random() * (max - min) + min))
