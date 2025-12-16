const { randomDelay } = require('../utils/delay')

module.exports = async () => {
  // يقف بدون أي حركة (إنساني)
  await randomDelay(6000, 22000)
}
