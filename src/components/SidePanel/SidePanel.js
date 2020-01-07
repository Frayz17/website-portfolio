import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import MyPhoto from 'static/images/forPortfolio.jpg';

const useStyles = makeStyles({
  Card: {
    width: 250
  },
  CardMedia: {
    maxWidth: 280,
    height: 280,
    margin: '0 auto'
  }
});

export default () => {
  const classes = useStyles();
  return (
    <Paper>
      <Container>
        <Card>
          <CardMedia className={classes.CardMedia} image={MyPhoto} />
        </Card>
        <Typography variant={'h4'}>Andrey Dmitriew</Typography>
      </Container>
    </Paper>
  );
};
