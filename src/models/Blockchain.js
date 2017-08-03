const { Block } = require('./Block');

class Blockchain {
  constructor() {
    this.blocks = [Block.getGenesisBlock()];
  }

  getLast() {
    return [...this.blocks].pop();
  }

  getNext() {
    return new Block(this.getLast());
  }

  addBlock() {

  }
}

module.exports = { Blockchain };