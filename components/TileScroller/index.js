import Tile from '../Tile';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { blueGrey } from '@mui/material/colors';

const color = blueGrey[50];

const TileScroller = ({ data,name, ...props }) => {
    return (
    <Box display='flex' flexDirection='column' alignItems='center' bgcolor={color} {...props}>
        <Typography variant="h3" component="h2">
            {name}
        </Typography>
        <Box display='flex' justifyContent='flex-start' gap={4} padding={4} width='80vw' sx={{
            overflowX: 'scroll'
        }}>
            {data.items.map((item,index) => <Tile key={index} item={item} />)}
        </Box>
    </Box>
    )
}

export default TileScroller;