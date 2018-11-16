
const express = require('express');
const blocklgs = require('../handler/blocklgs');
const iquidus = require('../handler/iquidus');

const router = express.Router();

router.get('/address/:hash', blocklgs.getAddress);
router.get('/block/average', blocklgs.getAvgBlockTime());
router.get('/block/is/:hash', blocklgs.getIsBlock);
router.get('/block/:hash', blocklgs.getBlock);
router.get('/coin', blocklgs.getCoin);
router.get('/coin/history', blocklgs.getCoinHistory);
router.get('/coin/week', blocklgs.getCoinsWeek());
router.get('/masternode', blocklgs.getMasternodes);
router.get('/masternode/average', blocklgs.getAvgMNTime());
router.get('/masternode/:hash', blocklgs.getMasternodeByAddress);
router.get('/masternodecount', blocklgs.getMasternodeCount);
router.get('/peer', blocklgs.getPeer);
router.get('/supply', blocklgs.getSupply);
router.get('/top100', blocklgs.getTop100);
router.get('/tx', blocklgs.getTXs);
router.get('/tx/latest', blocklgs.getTXLatest);
router.get('/tx/week', blocklgs.getTXsWeek());
router.get('/tx/:hash', blocklgs.getTX);

// Iquidus Explorer routes.
router.get('/getdifficulty', iquidus.getdifficulty);
router.get('/getconnectioncount', iquidus.getconnectioncount);
router.get('/getblockcount', iquidus.getblockcount);
router.get('/getblockhash', iquidus.getblockhash);
router.get('/getblock', iquidus.getblock);
router.get('/getrawtransaction', iquidus.getrawtransaction);
router.get('/getnetworkhashps', iquidus.getnetworkhashps);

module.exports =  router;
