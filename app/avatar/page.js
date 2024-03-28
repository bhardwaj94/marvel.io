
import AvatarList from '../../components/AvatarList';
import { Avatars } from '../mock';
import { API_PUBLIC_KEY, getTimestamp, generateHash } from '../../utils'
export default async function Home() {
  const timestamp = getTimestamp();
  const hash = generateHash(timestamp);
  // let response;
  // try {
  //    response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
  //    .then(response=>response.json()).then(body=>body);
  // } catch (error) {
  //   console.error('Error fetching Marvel data:', error);
  //   throw error;
  // }
  // const {data:{results}} = response||{};
  return <AvatarList results={Avatars} />
}
