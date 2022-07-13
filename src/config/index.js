const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:9000'
  : 'http://www.combo-z.com/';
