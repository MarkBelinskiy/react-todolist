import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import Zoom from 'material-ui/transitions/Zoom';


const styles = theme => ({
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

class Note extends Component {

	render() {
		const classes = this.props.classes;
		const note = this.props.data.note;
		const title = this.props.data.title;
		const noteControls = this.props.noteControls;
		return (
			<Zoom in={ !this.props.editMode }>
				<Paper className={ classes.paper }
					   onMouseOver={ this.props.showNoteControls }
					   onMouseLeave={ this.props.hideNoteControls }>
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

					<div className={ classes.controls }>
						<Zoom in={ noteControls }>
							<Button variant="fab"
									mini
									color="primary"
									aria-label="edit"
									className={ classes.button }
									onClick={ this.props.triggerEditMode }>
								<EditIcon/>
							</Button>
						</Zoom>
						<Zoom in={ noteControls }
							  style={ { transitionDelay: noteControls ? 100 : 0 } }>
							<Button variant="fab"
									mini
									color="secondary"
									aria-label="add"
									className={ classes.button }>
								<DeleteIcon/>
							</Button>
						</Zoom>
					</div>
				</Paper>
			</Zoom>
		);
	}
}

export default withStyles( styles )( Note );