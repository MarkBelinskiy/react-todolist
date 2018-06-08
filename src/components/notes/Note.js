import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import NoteControlButtons from './NoteControlButtons'
import EditNote from '../../components/notes/EditNote';
import './Note.scss'


function DialogTransition(props) {
	return <Grow direction="up" {...props} />;
}
class Note extends Component {

	render() {
		const { id, title, note , newNote} = this.props.data;
		const { triggerEditNote, removeNote, noteControls, showNoteControls, hideNoteControls, editMode, updateNote } = this.props;
		return (
			<Paper className="paper"
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
					PaperProps={ { className: 'dialog' } }
					open={ newNote ? true : editMode }
					TransitionComponent={DialogTransition}
					keepMounted
					onClose={ () => triggerEditNote( id ) }
					aria-labelledby="form-dialog-title"
				>
						<DialogTitle className="dialog-title" id="form-dialog-title">Edit Note</DialogTitle>
						<EditNote
							data={ this.props.data }
							triggerEditNote={ () => triggerEditNote( id ) }
							removeNote={ () => removeNote( id ) }
							updateNote={ updateNote }/>

				</Dialog>
			</Paper>
		);
	}
}


export default ( Note );