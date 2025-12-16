module.exports.rand = (min, max) =>
  Math.random() * (max - min) + min

module.exports.chance = (p) =>
  Math.random() < p
