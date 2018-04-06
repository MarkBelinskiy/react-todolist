import React, { Component } from 'react';
import MenuActions from './components/MenuActions';
import MenuActionsData from './data/MenuActionsData';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import Zoom from 'material-ui/transitions/Zoom';

import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 12,
  },
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

class App extends Component {

  constructor ( props ) {
    super ( props );
    this.state = {
      menuData: MenuActionsData,
      showControls: false,
    };
  }

  mouseEnter = () => {
    this.setState ( { showControls: !this.state.showControls } );
  };

  render () {
    const { classes } = this.props;
    const { menuData, showControls } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
        <MenuActions menuData={menuData}/>
        <div className={classes.root}>
          <Grid container
                spacing={24}>
            <Grid item
                  className={classes.grid}
                  xs={12}
                  sm={6}>
              <Paper className={classes.paper}
                     onMouseEnter={this.mouseEnter.bind ( this )}
                     onMouseLeave={this.mouseEnter.bind ( this )}>
                <Typography variant="headline"
                            component="h3">
                  This is a sheet of paper.
                </Typography>
                <Typography component="p"
                            align="justify">
                  Lorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam
                  quidem quo quos reiciendis repudiandae rerum sed totam ut velit voluptates! Dolores, hic!
                </Typography>
                <div className={classes.controls}>
                  <Zoom in={showControls}>
                    <Button variant="fab"
                            mini
                            color="primary"
                            aria-label="edit"
                            className={classes.button}>
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
            <Grid item
                  className={classes.grid}
                  xs={12}
                  sm={6}>
              <Paper className={classes.paper}
                     onMouseEnter={this.mouseEnter.bind ( this )}
                     onMouseLeave={this.mouseEnter.bind ( this )}>
                <Typography variant="headline"
                            component="h3">
                  This is a sheet of paper.
                </Typography>
                <Typography component="p"
                            align="justify">
                  Lorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam
                  quidem quo quos reiciendis repudiandae rerum sed totam ut velit voluptates! Dolores, hic!
                </Typography>
                <div className={classes.controls}>
                  <Zoom in={showControls}>
                    <Button variant="fab"
                            mini
                            color="primary"
                            aria-label="edit"
                            className={classes.button}>
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
            <Grid item
                  className={classes.grid}
                  xs={12}
                  sm={6}>
              <Paper className={classes.paper}
                     onMouseEnter={this.mouseEnter.bind ( this )}
                     onMouseLeave={this.mouseEnter.bind ( this )}>
                <Typography variant="headline"
                            component="h3">
                  This is a sheet of paper.
                </Typography>
                <Typography component="p"
                            align="justify">
                  Lorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam
                  quidem quo quos reiciendis repudiandae rerum sed totam ut velit voluptates! Dolores, hic!
                </Typography>
                <div className={classes.controls}>
                  <Zoom in={showControls}>
                    <Button variant="fab"
                            mini
                            color="primary"
                            aria-label="edit"
                            className={classes.button}>
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
          </Grid>
        </div>
      </div>
    )
      ;
  }
}

export default withStyles ( styles ) ( App );
