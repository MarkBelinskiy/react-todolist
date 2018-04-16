import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './EditNote.css';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import Close from 'material-ui-icons/Close';
import Zoom from 'material-ui/transitions/Zoom';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  input: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '1.5rem',
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: '8px',
    padding: '0',

  },
  raisedPrimary: {
    '&:hover': {
      backgroundColor: '#00C853',
    },
    backgroundColor: '#00E676',
  },
  formControl: {
    width: '100%',
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

class EditNote extends Component {

  constructor ( props ) {
    super ( props );
    this.state = {
      title: '',
      note: '',
    };
  }

  handleSubmit ( e ) {
    e.preventDefault ();
    console.log ( this.state );
  }

  handleInputChange ( e ) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState ( {
      [name]: value,
    } );
  }

  render () {
    const classes = this.props.classes;
    const editMode = this.props.editMode;
    const title = this.props.data.title;
    const note = this.props.data.note;

    return (
      <Zoom in={ editMode }>
        <Paper className={ classes.paper }>
          <form className="edit-note"
                noValidate
                autoComplete="off"
                onSubmit={ ( e ) => this.handleSubmit ( e ) }
          >
            <FormControl className={ classes.formControl }>
              <InputLabel>Title</InputLabel>
              <Input
                fullWidth
                defaultValue={ title }
                className={ classes.input }
                classes={ {
                  input: this.props.classes.input,
                } }
                inputProps={ {
                  'aria-label': 'Description',
                } }
                onChange={ ( e ) => this.handleInputChange ( e ) }
                name="title"
              />
            </FormControl>
            <FormControl className={ classes.formControl }>
              <TextField
                label="Your note"
                multiline
                rowsMax="4"
                defaultValue={ note }
                margin="normal"
                onChange={ ( e ) => this.handleInputChange ( e ) }
                name="note"
              />
            </FormControl>
            <div className={ classes.controls }>
              <Button variant="fab"
                      mini
                      type="submit"
                      color="primary"
                      aria-label="save"
                      className={ classes.button }
                      classes={ { root: this.props.classes.raisedPrimary } }
              >
                <Done/>
              </Button>
              <Button variant="fab"
                      mini
                      color="secondary"
                      aria-label="cancel"
                      className={ classes.button }
                      onClick={ this.props.triggerEditMode }>
                <Close/>
              </Button>
            </div>
          </form>
        </Paper>
      </Zoom>
    );
  }
}

export default withStyles ( styles ) ( EditNote );