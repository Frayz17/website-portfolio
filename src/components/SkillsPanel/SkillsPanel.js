import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    paddingTop: 30
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 30
  }
});

export default function SkillsPanel() {
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
            Skills
          </Typography>
        </Container>
      </Paper>
    </Container>
  );
}
