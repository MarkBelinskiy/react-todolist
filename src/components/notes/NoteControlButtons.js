import React, { Component } from 'react';
import './NoteControlButtons.scss'
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';
import { Delete, Edit } from '@material-ui/icons';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition( props ) {
	return <Slide direction="up" { ...props } />;
}


class Note extends Component {

	triggerDeleteConfirm = () => {
		this.setState( { openDeleteConfirm: !this.state.openDeleteConfirm } );
	};

	constructor( props ) {
		super( props );
		this.state = {
			openDeleteConfirm: false,
		};
	}

	render() {
		const { triggerDeleteConfirm } = this;
		const { triggerEditNote, removeNote, noteControls } = this.props;
		const { openDeleteConfirm } = this.state;
		return (
			<div className="controls">
				<Zoom in={ noteControls }>
					<Button variant="fab"
							mini
							color="primary"
							aria-label="edit"
							className="button"
							onClick={ triggerEditNote }>
						<Edit/>
					</Button>
				</Zoom>
				<Zoom in={ noteControls }
					  style={ { transitionDelay: noteControls ? 100 : 0 } }>
					<Button variant="fab"
							mini
							color="secondary"
							aria-label="add"
							className="button"
							onClick={ triggerDeleteConfirm }
					>
						<Delete/>
					</Button>
				</Zoom>

				<Dialog
					open={ openDeleteConfirm }
					TransitionComponent={ Transition }
					keepMounted
					onClose={ triggerDeleteConfirm }
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description"
				>
					<DialogTitle id="alert-dialog-slide-title">
						{ "Remove Note?" }
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							Do you want to delete it? Are you sure?
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={ removeNote } color="primary">
							Yes, please
						</Button>
						<Button onClick={ triggerDeleteConfirm } color="primary">
							Nope, tnx
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default Note;