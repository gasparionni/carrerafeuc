import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './estilos.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: '#000',
    background: '#3d3d3d',
    aling: 'left',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src="https://portal.ucol.mx/feuc/wp-content/uploads/2017/10/cropped-feuc14-1.png" alt="Logo feuc"/>
            <h2 className="registro">Registro</h2>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);