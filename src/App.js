import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle.jsx';
import Grid from '@material-ui/core/Grid';
import Navigation from 'components/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import SidePanel from 'components/SidePanel';
import ProjectsPanel from 'components/ProjectsPanel';
import SkillsPanel from 'components/SkillsPanel';
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
      <GlobalStyle />
      <Navigation />
      <Grid container>
        <Grid item xs={12} sm={5} md={3}>
          <SidePanel />
        </Grid>
        <Grid item xs={12} sm={7} md={9}>
          <Switch>
            <Route exact path="/">
              <ProjectsPanel />
            </Route>
            <Route path="/skills">
              <SkillsPanel />
            </Route>
          </Switch>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
