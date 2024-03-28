import Link from "next/link";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const Avatar = ({ avatar }) => {
    const { name, thumbnail, id,description } = avatar;
    return     <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
      title={name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {name}
      </Typography>
      {/* <Typography variant="body2" color="text.secondary">
        {description}
      </Typography> */}
    </CardContent>
    <CardActions>
    <Link href={`avatar/${id}`}>Learn More</Link>
    </CardActions>
  </Card>
}

export default Avatar;