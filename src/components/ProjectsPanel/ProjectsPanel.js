import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Project from 'components/Project';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import data from './data';

const useStyles = makeStyles({
  paper: {
    paddingTop: 30
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 30
  }
});

export default function ProjectsPanel() {
  const [projects] = React.useState(data);

  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.paper}>
        <Container>
          <Typography
            className={classes.title}
            variant="h3"
            gutterBottom
            align="center"
          >
            Projects
          </Typography>
          <Grid container spacing={3}>
            {projects.map((item) => {
              return (
                <Grid item xs={12} sm={12} md={4} lg={3}>
                  <Project
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imgSrc={item.imgSrc}
                    href={item.href}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
