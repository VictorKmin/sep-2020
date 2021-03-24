const winston = require('winston');
const path = require('path');

module.exports = () => {
  const consoleOptions = {
    level: 'info',
    format: winston.format.combine(
      winston.format.colorize({ colors: { info: 'yellow', error: 'red' }, all: true })
    )
  };

  const fileOption = {
    level: 'error',
    filename: path.join(process.cwd(), 'logs', 'log.txt'),
    format: winston.format.combine(
      winston.format.json({ space: 2 }),
    )
  };

  const logger = winston.createLogger({
    // format: winston.format.combine(
    //   winston.format.timestamp({
    //     format: 'YYYY-MM-DD HH:mm:ss'
    //   }),
    // ),
    transports: [
      new winston.transports.Console(consoleOptions),
      new winston.transports.File(fileOption)
    ]
  });

  return {
    info: (message) => logger.info(message),
    error: (message) => logger.error(message)
  };
};
