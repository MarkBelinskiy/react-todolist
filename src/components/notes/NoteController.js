import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import EditNote from './EditNote';
import Note from './Note';

const styles = theme => ({
	grid: {
		marginBottom: '2em',
	}
});

class NoteController extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			noteControls: false,
			editMode: false
		};
	}

	showNoteControls = () => {
		this.setState( { noteControls: true } );
	};
	hideNoteControls = () => {
		this.setState( { noteControls: false } );
	};

	triggerEditMode = () => {
		this.hideNoteControls();
		this.setState( { editMode: !this.state.editMode } );
	};


	render() {
		const classes = this.props.classes;
		const data = this.props.data;
		const { noteControls, editMode } = this.state;

		return (
			<Grid item className={ classes.grid } xs={ 12 } sm={ 6 }>
				{ editMode ?
					<EditNote
						data={ data }
						editMode={ editMode }
						triggerEditMode={ () => this.triggerEditMode() }
					/> :
					<Note
						data={ data }
						editMode={ editMode }
						noteControls={ noteControls }
						showNoteControls={ () => this.showNoteControls() }
						hideNoteControls={ () => this.hideNoteControls() }
						triggerEditMode={ () => this.triggerEditMode() }
					/>
				}

			</Grid>
		);
	}
}

export default withStyles( styles )( NoteController );