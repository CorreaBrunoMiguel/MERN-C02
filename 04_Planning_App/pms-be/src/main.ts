import cluster from 'cluster';

import { ExpressServer } from './express_server';
import { DatabaseUtil } from './utils/db';

// Connect the express server
const server = new ExpressServer();

// Connectthe database
new DatabaseUtil();

process.on('uncaughtException', (error: Error) => {
  console.error(`Uncaught exception in worker process ${process.pid}`, error);

  // Close any open connection or resources
  server.closeServer();

  setTimeout(() => {
    cluster.fork();
    cluster.worker?.disconnect();
  }, 1000);
});

// Gracefully handle termination signals
process.on('SIGINT', () => {
  console.log('Receive SIGINT signal');
  // Close any open connections or resources
  server.closeServer();
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM signal');
  // Close any open connections or resources
  server.closeServer();
});
