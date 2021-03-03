import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
});

const CardItem = (props) => {
    const classes = useStyles()

    return (
        <div className={`card ${classes.root}`}>
            <CardMedia
                component="img"
                alt={props.alt}
                height="140"
                image={props.image}
                title={props.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
        </div>
    )
}

export default CardItem