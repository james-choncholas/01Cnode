var should = require("should");
var request = require("supertest");
var config = require("config");

describe('bitcoind rpc call restful API routing tests:', function(){
	it('should return number of connections for /api/bitcoind/getconnectioncount');
	it('should return network info object for /api/bitcoind/getnetworkino');
	it('should return mempoolinfo objet for /api/bitcoind/getmempoolinfo');
	it('should return mempool entry identified by <hash> at /api/bitcoind/getmempoolentry/<hash>');
	it('should return block hash given the block height at /api/bitcoind/getblockhash/<index>');
	it('should return block object when <hash> is given at /api/bitcoind/getblock/hash');
	it('should return estimated fee for <nblocks> at /api/bitcoind/estimatefee/<nblocks>');
});
