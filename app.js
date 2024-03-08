const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

// Setup logging
const logLevel = process.env.LOG_LEVEL || 'INFO';

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console()
  ]
});

// Routes
app.get('/info', (req, res) => {
  logger.info('This is an info message');
  res.send('Info message logged');
});

app.get('/debug', (req, res) => {
  logger.debug('This is a debug message');
  res.send('Debug message logged');
});

app.get('/error', (req, res) => {
  logger.error('This is an error message');
  res.send('Error message logged');
});

app.get('/fatal', (req, res) => {
  logger.log('fatal', 'This is a fatal message');
  res.send('Fatal message logged');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
