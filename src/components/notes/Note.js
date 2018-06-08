import React, { Component } from 'react';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import NoteControlButtons from './NoteControlButtons'


import EditNote from '../../components/notes/EditNote';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
	dialog:{
	maxWidth:'inherit',
		'&:focus': {
			outline: 'none',
		},
	},
	paper: {
		position: 'relative',
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		height: '90%',
		color: theme.palette.text.secondary,
	},

});

class Note extends Component {

	render() {
		const { id, title, note } = this.props.data;
		const { classes, triggerEditNote, removeNote, noteControls, showNoteControls, hideNoteControls, editMode, updateNote } = this.props;
		return (
			<Paper className={ classes.paper }
				   onMouseOver={ showNoteControls }
				   onMouseLeave={ hideNoteControls }>
				{ title &&
				<Typography variant="headline" component="h3">
					{ title }
				</Typography>
				}
				{ note &&
				<Typography component="p" align="justify">
					{ note }
				</Typography>
				}
				<NoteControlButtons
					noteControls={ noteControls }
					triggerEditNote={ triggerEditNote }
					removeNote={ removeNote }
				/>
				<Dialog
					PaperProps={ {className: classes.dialog} }
					open={ editMode }
					onClose={ this.handleClose }
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
					<EditNote
						data={ this.props.data }
						editMode={ editMode }
						triggerEditNote={ () => triggerEditNote( id ) }
						removeNote={ () => removeNote( id ) }
						updateNote={ updateNote }/>
				</Dialog>
			</Paper>
		);
	}
}


export default withStyles( styles )( Note );