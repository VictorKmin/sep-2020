const cron = require('node-cron');

const calculateUsersCount = require('./calculate-statistic');

module.exports = () => {
  cron.schedule('*/10 * * * * *', () => {
    console.log(`${new Date().toISOString()}: jobs started`);
    calculateUsersCount();
    console.log(`${new Date().toISOString()}: jobs finished`);
  });
};
