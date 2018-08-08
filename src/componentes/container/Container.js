import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGridContainer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Qui laudantium fugiat distinctio at obcaecati, ad quis
                quisquam animi nam cum facere nesciunt, id soluta vero
                velit voluptas eos laborum odio!
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Repudiandae non, quibusdam ullam unde in saepe nisi perferendis 
                ad iste nam! Odio pariatur neque necessitatibus officia maxime
                quis quas ducimus et?
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Qui laudantium fugiat distinctio at obcaecati, ad quis
                quisquam animi nam cum facere nesciunt, id soluta vero
                velit voluptas eos laborum odio!
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Repudiandae non, quibusdam ullam unde in saepe nisi perferendis 
                ad iste nam! Odio pariatur neque necessitatibus officia maxime
                quis quas ducimus et?
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGridContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGridContainer);