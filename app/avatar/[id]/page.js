import { API_PUBLIC_KEY, getTimestamp, generateHash } from '../../../utils'
import { AvatarDetails } from '../../mock';
import Image from 'next/image';
export default async function CharacterPage({ params }) {
    const { id } = params;
    //     const timestamp = getTimestamp();
    //     const hash = generateHash(timestamp);
    //       let response;
    //   try {
    //      response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
    //      .then(response=>response.json()).then(body=>body);
    //   } catch (error) {
    //     console.error('Error fetching Marvel data:', error);
    //     throw error;
    //   }
    //   const {data:{results}} = response||{};
    const { name, thumbnail } = AvatarDetails;
    return <>
        <h1>{name}</h1>
        <Image
            alt={name}
            src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
            height={100}
            width={100}
        />
    </>
}
