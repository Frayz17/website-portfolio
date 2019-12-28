import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Grid container item md={12}>
            <Typography variant="h6">Frayz</Typography>
          </Grid>
          <Grid container item md={12} justify="space-between">
            <Button color="inherit">Home</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Contacts</Button>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
