import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles({
  card: {
    width: 250
  },
  cardMedia: {
    height: 180
    // backgroundSize: 'contain'
  },
  link: {
    '&:hover': {
      textDecoration: 'none'
    }
  }
});

export default function Project({ imgSrc, title, description, href }) {
  const classes = useStyles();

  return (
    <Grid item>
      <Link className={classes.link} href={href}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={imgSrc} />
          <CardContent>
            <Typography variant="subtitle2">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
