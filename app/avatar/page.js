
import AvatarList from '../../components/AvatarList';
import { Avatars } from '../mock';
import { getData } from '../../utils'
export default async function Home() {
  // const data = await getData('characters');
  return <AvatarList
    // results={data}
    results={Avatars}
  />
}
