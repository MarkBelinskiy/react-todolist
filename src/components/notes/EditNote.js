import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Paper, Button, TextField} from '@material-ui/core';
import {Done, Close} from '@material-ui/icons';
import './EditNote.scss';

class EditNote extends Component {
	constructor( props ) {
		super( props );
		const { id, title, note, editMode } = this.props.data;
		this.state = {
			id,
			title,
			note,
			editMode
		};
	}


	handleSubmit( e ) {
		e.preventDefault();
		this.props.updateNote( this.state );
	}

	handleInputChange( e ) {
		const { name, value } = e.target;
		this.setState( { [ name ]: value } );
	}

	render() {
		const { title, note } = this.props.data;
		const { triggerEditNote } = this.props;

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
						defaultValue={ title }
						onChange={ ( e ) => this.handleInputChange( e ) }
						name="title"
					/>

					<TextField
						label="Your note"
						fullWidth
						multiline
						rowsMax="20"
						defaultValue={ note }
						margin="normal"
						onChange={ ( e ) => this.handleInputChange( e ) }
						name="note"
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
								onClick={ triggerEditNote }>
							<Close/>
						</Button>
					</div>
				</form>
			</Paper>
		);
	}
}

export default EditNote;