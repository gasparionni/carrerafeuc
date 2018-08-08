import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './estilosfooter.css';

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

function CenteredGridFooter(props) {
  const { classes } = props;

  return (
    <div className='footer'>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <span>
                  <p>Lorem ipsum dolor sit amet.</p>
              </span>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

CenteredGridFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGridFooter);