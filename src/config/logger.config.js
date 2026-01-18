const winston = require("winston");
require("winston-daily-rotate-file");

const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
  filename: "logs/%DATE%-combined.log", // log file name pattern
  datePattern: "YYYY-MM-DD", // rotate daily
  zippedArchive: true, // compress old logs
  maxSize: "20m", // max size of one log file
  maxFiles: "14d", // keep logs for 14 days
  level: "info",
});

const errorDailyRotateFileTransport = new winston.transports.DailyRotateFile({
  filename: "logs/%DATE%-error.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "30d",
  level: "error",
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ timestamp, level, message, stack }) => {
      return stack
        ? `${timestamp} [${level.toUpperCase()}] : ${message}\n${stack}`
        : `${timestamp} [${level.toUpperCase()}] : ${message}`;
    })
  ),

  transports: [
    // Console logs (with color)
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ level: true }),
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.printf(({ timestamp, level, message, stack }) => {
          return stack
            ? `${timestamp} [${level}] : ${message}\n${stack}`
            : `${timestamp} [${level}] : ${message}`;
        })
      ),
    }),

    dailyRotateFileTransport,
    errorDailyRotateFileTransport,
  ],
});

module.exports = logger;
