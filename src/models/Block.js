const { sha256 } = require('crypto');

class Block {
  constructor(previousBlock) {
    this.id = previousBlock.id + 1;
    this.previousHash = previousBlock.hash;
    this.transactions = new Transactions();
    this.nonce = null;
    this.hash = null;
    this.merkleRoot = null;
  }

  mine(nonce, hash) {
    this.nonce = nonce;
    this.hash = hash;
  }

  verify() {
    const hash = sha256(this.getHashString());
    return this.hash === hash && hash.substring(0, 4) === '0000';
  }

  getHashString(nonce) {
    return `${this.id}${this.previousHash}${this.merkleRoot}${nonce}`;
  }

  static getGenesisBlock() {
    return {
      id: 0,
      previousHash: null,
      transactions: null,
      nonce: 0,
      hash: '125',
      merkleRoot: '',
    };
  }
}

module.exports = { Block };
