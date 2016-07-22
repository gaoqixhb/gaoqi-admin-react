var env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

module.exports = require('./build/webpack.' + env);
