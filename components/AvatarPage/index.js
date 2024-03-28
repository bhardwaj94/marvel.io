import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import TileScroller from '../TileScroller';

const AvatarPage = ({ data }) => {
    const { name, thumbnail, description, comics, series, stories } = data;
    return <Box
        display="flex"
        alignItems="center"
        flexDirection='column'
        marginY={3}
    >
        <Box display='flex' alignSelf='start' width='80vw'>
            <Image
                alt={name}
                src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
                height={100}
                width={100}
            />
            <Box display='flex' marginLeft={3} flexDirection='column'>
                <Typography variant="h3">
                    {name}
                </Typography>
                <Typography variant='subtitle1'>
                    {description}
                </Typography>
            </Box>
        </Box>
        <TileScroller data={comics} marginTop={3} name='comics' />
        <TileScroller data={series} marginY={3} name='series' />
        <TileScroller data={stories} name='stories' />
    </Box>
}
export default AvatarPage;