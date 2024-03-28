import Avatar from '../Avatar';
import Grid from '@mui/material/Grid';
const AvatarList = ({ results }) => {
    return <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {results.map((avatar, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
                <Avatar key={avatar.id} avatar={avatar} />
            </Grid>
        ))}
    </Grid>
}

export default AvatarList;