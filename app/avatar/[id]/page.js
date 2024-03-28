import { getData } from '../../../utils'
import AvatarPage from '../../../components/AvatarPage';
import { AvatarDetails } from '../../mock';
export default async function CharacterPage({ params }) {
    const { id } = params;
    // const data = await getData(`characters/${id}`);
    return <AvatarPage
        // data={data[0]}
        data={AvatarDetails}
    />
}
