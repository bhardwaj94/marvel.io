import md5 from 'md5';

export const API_PUBLIC_KEY = process.env.PUBLIC_KEY;
export const API_PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_ENDPOINT = process.env.API_ENDPOINT;
export const getTimestamp = () => Math.floor(new Date().getTime() / 1000);
export const generateHash = (timestamp) =>
  md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

export const getData = async (segment) => {
  const timestamp = getTimestamp();
  const hash = generateHash(timestamp);
  let response;
  try {
    response = await fetch(`${API_ENDPOINT}/${segment}?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
      .then(response => response.json()).then(body => body);
  } catch (error) {
    console.error('Error fetching Marvel data:', error);
    throw error;
  }
  const { data: { results } } = response || {};
  return results;
}