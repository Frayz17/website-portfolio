import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from 'components/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import SidePanel from 'components/SidePanel';
import ProjectsPanel from 'components/ProjectsPanel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navigation: {
    marginBottom: '160px'
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Navigation className={classes.navigation} />
      <Grid container>
        <Grid item sm={3}>
          <SidePanel />
        </Grid>
        <Grid item sm={9}>
          <ProjectsPanel />
        </Grid>
      </Grid>
    </>
  );
}
