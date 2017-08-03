const { sha256 } = require('./util');
const { hrtime } = require('process');

function mine(block) {
  const startTime = hrtime();
  let nonce = 0;
  let hash;

  do {
    hash = sha256(block.getHashString(nonce));
    nonce++;
  } while (hash.substring(0,5) !== '00000');

  const endTime = hrtime(startTime);
  console.log(`block ${block.id} mined in ${nonce} cycles (${endTime} seconds)`);
  console.log(`generated hash: ${hash}`);
  return nonce;
}

module.exports = { mine };