import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Navigation from 'components/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import SidePanel from 'components/SidePanel';
import ProjectsPanel from 'components/ProjectsPanel';
import Footer from 'components/Footer';
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
      <Navigation />
      <Grid container>
        <Grid item sm={3}>
          <SidePanel />
        </Grid>
        <Grid item sm={9}>
          <Switch>
            <Route exact path="/">
              <ProjectsPanel />
            </Route>
            <Route path="/skills">
              <div>hi</div>
            </Route>
          </Switch>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
