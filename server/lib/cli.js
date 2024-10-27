const argv = require('yargs')
  .option('port', {
    alias: 'p',
    default: 3000,
    describe: 'Service port',
    type: 'number'
  })
  .option('delay', {
    alias: 'd',
    default: 1000,
    describe: 'Minimum delay (+ random)',
    type: 'number'
  })
  .option('fail', {
    alias: 'f',
    default: 0,
    describe: 'Probability of requests to randomly fail (0..1)',
    type: 'number'
  })
  .option('failUrls', {
    default: null,
    describe: 'Comma-separated list of pattern-matched urls to randomly fail',
    type: 'string'
  })
  .option('jwtAuth', {
    default: false,
    describe: 'JWT Auth is required (Authorization Bearer <token>)',
    type: 'boolean'
  })
  .option('tenantRequired', {
    alias: 't',
    default: false,
    describe: 'TenantID header is required',
    type: 'boolean'
  })
  .argv

module.exports = {
  argv
}
