import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    fontSize: 28,
    color: 'white'
  },
  link: {
    color: 'white'
  },
  toolbar: {
    justifyContent: 'center',
    backgroundColor: grey[800]
  }
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link
          className={classes.link}
          href="https://www.instagram.com/_andrey.dmitriev"
          variant="body2"
        >
          <IconButton>
            <InstagramIcon className={classes.iconButton} />
          </IconButton>
        </Link>

        <Link
          className={classes.link}
          href="https://github.com/Frayz17"
          variant="body2"
        >
          <IconButton>
            <GitHubIcon className={classes.iconButton} />
          </IconButton>
        </Link>

        <Link
          className={classes.link}
          href="mailto:andrydmit@gmail.com"
          variant="body2"
        >
          <IconButton>
            <MailIcon className={classes.iconButton} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
