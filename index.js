const { mine } = require('./src/miner');
const { Blockchain } = require('./src/models/Blockchain');
const { Block } = require('./src/models/Block');

const blockchain = new Blockchain();
const newBlock = blockchain.getNext();

mine(newBlock);
