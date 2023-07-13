const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = {
  ports: {
    http: PORT_HTTP,
    https: PORT_HTTPS,
  },

  ssl: {
    cert: readFileSync(resolve('CERT_PATH')),
    key: readFileSync(resolve('KEY_PATH')),
  },
};
