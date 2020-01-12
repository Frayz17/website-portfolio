import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import MyPhoto from 'static/images/forPortfolio.jpg';

const useStyles = makeStyles({
  card: {
    marginBottom: 10
  },
  cardMedia: {
    height: 280,
    backgroundPosition: 'top'
  },
  paper: {
    paddingTop: 30
  },
  title: {
    textAlign: 'center'
  },
  blockInfo: {
    marginBottom: 20
  }
});

export default () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Container>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={MyPhoto} />
        </Card>

        <Box className={classes.blockInfo}>
          <Box className={classes.title}>
            <Typography variant={'h4'}>Andrey Dmitriew</Typography>
          </Box>
          <Typography variant={'body1'}>
            Web Developer && System Engenier
          </Typography>
        </Box>

        <Box className={classes.blockInfo}>
          <Box className={classes.title}>
            <Typography variant={'h6'}>Education</Typography>
          </Box>
          <Typography variant={'body2'}>
            Master of Computer Science in Pryazovskyi State Technical
            University.
          </Typography>
        </Box>

        <Box className={classes.blockInfo}>
          <Box className={classes.title}>
            <Typography variant={'h6'}>Additional Education</Typography>
          </Box>
          <Typography variant={'body2'}>
            Beetroot Academy “Advanced javascript” 2019
          </Typography>
          <Divider />
          <Typography variant={'body2'}>Eset Technical Support 2016</Typography>
        </Box>

        <Box className={classes.blockInfo}>
          <Box className={classes.title}>
            <Typography variant={'h6'}>Languages</Typography>
          </Box>
          <Typography variant={'body2'}>Russian – native</Typography>
          <Divider />
          <Typography variant={'body2'}>Ukrainian – native</Typography>
          <Divider />
          <Typography variant={'body2'}>
            English – upper intermediate
          </Typography>
        </Box>

        <Box className={classes.blockInfo}>
          <Box className={classes.title}>
            <Typography variant={'h6'}>Skills</Typography>
          </Box>
          <Typography variant={'body2'}>Javascript</Typography>
          <Divider />
          <Typography variant={'body2'}>React, React Router, Hooks</Typography>
          <Divider />
          <Typography variant={'body2'}>Redux</Typography>
          <Divider />
          <Typography variant={'body2'}>Material-UI</Typography>
          <Divider />
          <Typography variant={'body2'}>HTML</Typography>
          <Divider />
          <Typography variant={'body2'}>CSS, SCSS</Typography>
          <Divider />
          <Typography variant={'body2'}>Bootstrap</Typography>
          <Divider />
          <Divider />
          <Box className={classes.title}>
            <Typography variant={'subtitle2'}>Basic Knowlege</Typography>
          </Box>
          <Typography variant={'body2'}>Nodejs, Express</Typography>
          <Divider />
          <Typography variant={'body2'}>Vue</Typography>
          <Divider />
          <Typography variant={'body2'}>mySql, PostgreSQL</Typography>
          <Divider />
          <Typography variant={'body2'}>Wordpress, Woocommerce</Typography>
        </Box>
      </Container>
    </Paper>
  );
};
