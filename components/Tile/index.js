import { ComicData } from '../../app/mock';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getData } from '../../utils'

const Tile = async ({ item }) => {
  const { resourceURI, name } = item;
  const match = resourceURI.match(/([^/]+)\/([^/]+)$/);
  const urlSegment = `${match[1]}/${match[2]}`;
  // const data = await getData(urlSegment);
  const { thumbnail } = ComicData[0];
  return <Card sx={{ minWidth: 345 }}>
    <CardMedia
      sx={{ height: 120 }}
      image={thumbnail ? `${thumbnail?.path}/portrait_xlarge.${thumbnail?.extension}` : process.env.DEFAULT_IMAGE}
      title={name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
    </CardContent>
  </Card>
}

export default Tile;