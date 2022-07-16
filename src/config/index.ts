export const isDev = process.env.NODE_ENV !== 'production';

export const server = isDev
  ? 'http://localhost:9000/'
  : 'https://www.combo-z.com/';
