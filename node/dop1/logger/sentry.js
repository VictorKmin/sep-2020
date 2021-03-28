const Sentry = require('@sentry/node');

const { SENTRY_DSN } = require('../configs/config');

Sentry.init({
  dsn: SENTRY_DSN
});

module.exports = Sentry;
