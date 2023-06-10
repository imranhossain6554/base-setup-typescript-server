import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorLogger, logger } from './shared/logger';

let server: Server;
async function boostrap() {
  process.on('uncaughtException', error => {
    errorLogger.error(error);
    process.exit(1);
  });

  try {
    await mongoose.connect(config.database_url as string);
    // eslint-disable-next-line no-console
    logger.info(`🛢   Database is connected successfully`);

    server = app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      logger.info(`Application  listening on port ${config.port}`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    errorLogger.error('Failed to connect database', err);
    process.exit(1);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });

  process.on('SIGTERM', () => {
    logger.info('SIGTERM signal received. Gracefully shutting down...');
    if (server) {
      server.close(() => {
        process.exit(0);
      });
    } else {
      process.exit(0);
    }
  });
}

boostrap();
