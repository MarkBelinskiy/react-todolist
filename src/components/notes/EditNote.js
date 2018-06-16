import React, { Component } from 'react';
import { Button, Paper, TextField } from '@material-ui/core';
import { Close, Done } from '@material-ui/icons';
import EditNoteDescriptionView from './EditNoteDescriptionView'
import './EditNote.scss';


class EditNote extends Component {
	constructor( props ) {
		super( props );
		const { id, title, note } = this.props.data;

		this.state = {
			id,
			title,
			note,
		};

		this.baseState = this.state;
	}


	handleClearForm() {
		const { popupCloseMethod } = this.props;
		popupCloseMethod();
		this.setState( this.baseState );
	}

	handleSubmit( e ) {
		e.preventDefault();
		const { submitMethod, popupCloseMethod } = this.props;
		submitMethod( this.state );
		popupCloseMethod();
		this.setState( this.baseState );
	}

	handleSingleInputChange( e ) {
		const { name, value } = e.target;
		this.setState( { [ name ]: value } );
	}

	handleListChange( newListItems ) {
		this.setState( { note: newListItems } );
	}

	render() {
		const { title, note } = this.state;
		return (
			<Paper className="edit-paper">
				<form className="edit-note"
					  noValidate
					  autoComplete="off"
					  onSubmit={ ( e ) => {this.handleSubmit( e )} }
				>
					<TextField
						fullWidth
						label="Title"
						value={ title }
						onChange={ ( e ) => this.handleSingleInputChange( e ) }
						name="title"
					/>


					<EditNoteDescriptionView noteData={ note }
											 handleSingleInputChange={ ( e ) => this.handleSingleInputChange( e ) }
											 handleListChange={ ( e ) => this.handleListChange( e ) }

					/>

					<div className="controls">
						<Button variant="fab"
								mini
								type="submit"
								color="primary"
								aria-label="save"
								className="button"
								classes={ { root: "raisedPrimary" } }
						>
							<Done/>
						</Button>
						<Button variant="fab"
								mini
								color="secondary"
								aria-label="cancel"
								className="button"
								onClick={ () => this.handleClearForm() }
						>
							<Close/>
						</Button>
					</div>
				</form>
			</Paper>
		);
	}
}

EditNote.defaultProps = {
	data: {
		id: '',
		title: '',
		note: '',
	},
};

export default EditNote;