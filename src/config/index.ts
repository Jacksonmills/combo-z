const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:9000/'
  : 'https://www.combo-z.com/';
