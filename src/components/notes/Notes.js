import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import NotesData from '../../data/NotesData';
import NoteController from './NoteController';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 12,
  },
});

class Notes extends Component {

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container
              spacing={24}>
          {(NotesData.length === 0) ?
            <p>Soryan, there is no notes, yet. Create your first note!</p> :
            NotesData.map ( noteItem =>
              <NoteController key={noteItem.id} data={{...noteItem}}/>,
            )
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles ( styles ) ( Notes );
