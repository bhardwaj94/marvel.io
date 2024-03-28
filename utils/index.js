import md5 from 'md5';

export const API_PUBLIC_KEY = process.env.PUBLIC_KEY;
export const API_PRIVATE_KEY = process.env.PRIVATE_KEY;
export const getTimestamp = () => Math.floor(new Date().getTime() / 1000);
export const generateHash = (timestamp) =>
  md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);