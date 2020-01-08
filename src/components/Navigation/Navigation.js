import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: '#fff'
  }
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Frayz Page
        </Typography>

        <Link component={RouterLink} to='/'>
          <Button className={classes.link}>Projects</Button>
        </Link>
        <Link component={RouterLink} to='/skills'>
          <Button className={classes.link}>Skills</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
