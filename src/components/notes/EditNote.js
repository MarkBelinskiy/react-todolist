import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './EditNoteStyles'
import './EditNote.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Done from '@material-ui/icons/Done';
import Close from '@material-ui/icons/Close';
import Zoom from '@material-ui/core/Zoom';
import TextField from '@material-ui/core/TextField';


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
		const { triggerEditNote, editMode, classes } = this.props;

		return (
			<Zoom in={ editMode }>
				<Paper className={ classes.paper }>
					<form className="edit-note"
						  noValidate
						  autoComplete="off"
						  onSubmit={ ( e ) => {this.handleSubmit( e )} }
					>
						<TextField
							fullWidth
							label="Title"
							defaultValue={ title }
							className={ classes.input }
							onChange={ ( e ) => this.handleInputChange( e ) }
							name="title"
						/>

						<TextField
							label="Your note"
							fullWidth
							multiline
							rowsMax="20"
							defaultValue={ note }
							InputProps={ {
								className: classes.textarea
							} }
							margin="normal"
							onChange={ ( e ) => this.handleInputChange( e ) }
							name="note"
						/>
						<div className={ classes.controls }>
							<Button variant="fab"
									mini
									type="submit"
									color="primary"
									aria-label="save"
									className={ classes.button }
									classes={ { root: classes.raisedPrimary } }
							>
								<Done/>
							</Button>
							<Button variant="fab"
									mini
									color="secondary"
									aria-label="cancel"
									className={ classes.button }
									onClick={ triggerEditNote }>
								<Close/>
							</Button>
						</div>
					</form>
				</Paper>
			</Zoom>
		);
	}
}

export default withStyles( styles )( EditNote );