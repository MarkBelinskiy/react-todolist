import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import Zoom from 'material-ui/transitions/Zoom';

const styles = theme => ({

  grid: {
    marginBottom: '2em',
  },
  paper: {
    position: 'relative',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    height: '90%',
    color: theme.palette.text.secondary,
  },
  button: {
    marginLeft: '10px',
  },
  controls: {
    position: 'absolute',
    bottom: '-20px',
    right: '0',
  },
});

class Note extends Component {

  constructor ( props ) {
    super ( props );
    this.state = {
      showControls: false,
      editMode: false
    };
  }

  triggerControls = () => {
    this.setState ( { showControls: !this.state.showControls } );
  };

  editNote = () => {
    this.setState ( { editMode: !this.state.editMode } );
  };

  render () {
    const classes = this.props.classes;
    const description = this.props.data.description;
    const title = this.props.data.title;
    const { showControls, editMode } = this.state;
    return (
      <Grid item
            className={classes.grid}
            xs={12}
            sm={6}>
        <Paper className={classes.paper}
               onMouseEnter={() => this.triggerControls ()}
               onMouseLeave={() => this.triggerControls ()}>
          {(title !== 0) ?
            <Typography variant="headline"
                        component="h3">
              {title}
            </Typography> : ''
          }
          {(description !== 0) ?
            <Typography component="p"
                        align="justify">
              {description}
            </Typography> : ''
          }

          <div className={classes.controls}>
            <Zoom in={showControls}>
              <Button variant="fab"
                      mini
                      color="primary"
                      aria-label="edit"
                      className={classes.button}
                      onClick={() => this.editNote ()}>
                <EditIcon />
              </Button>
            </Zoom>
            <Zoom in={showControls}
                  style={{ transitionDelay: showControls ? 100 : 0 }}>
              <Button variant="fab"
                      mini
                      color="secondary"
                      aria-label="add"
                      className={classes.button}>
                <DeleteIcon />
              </Button>
            </Zoom>
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles ( styles ) ( Note );