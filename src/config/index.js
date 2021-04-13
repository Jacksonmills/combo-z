const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:9000'
  : // TODO: finalize url
    'https://your_deployment.server.com';
