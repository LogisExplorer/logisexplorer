
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'https://explorer.bulwarkcrypto.com',
    'port': '443',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'https://api.coinmarketcap.com/v2/ticker/?start=701&limit=100',
    'ticker': 'LGS'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'blocklgs',
    'user': 'blocklgsuser',
    'pass': 'Explorer!1'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '48485',
    'user': 'lgsrpc',
    'pass': 'someverysafepassword',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;