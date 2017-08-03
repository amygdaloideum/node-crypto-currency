const { createHash } = require('crypto');

function sha256(input) {
  const fsha256 = createHash('sha256');  
  return fsha256.update(input).digest('hex');
}

module.exports = { sha256 };