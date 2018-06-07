import React, { Component } from 'react';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import NoteControlButtons from './NoteControlButtons'



import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const styles = theme => ({
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
		const { title, note } = this.props.data;
		const { classes, triggerEditNote, removeNote, noteControls, showNoteControls, hideNoteControls, editMode, fullScreen } = this.props;
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
						fullScreen={ fullScreen }
						open={ editMode }
						onClose={ this.handleClose }
						aria-labelledby="responsive-dialog-title"
					>
						<DialogTitle id="responsive-dialog-title">{ "Use Google's location service?" }</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Let Google help apps determine location. This means sending anonymous location data to
								Google, even when no apps are running.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={ this.handleClose } color="primary">
								Disagree
							</Button>
							<Button onClick={ this.handleClose } color="primary" autoFocus>
								Agree
							</Button>
						</DialogActions>
					</Dialog>
				</Paper>
		);
	}
}

const combinedHOC = compose(
	withStyles( styles ),


	withMobileDialog(),

);

export default combinedHOC( Note )

// export default withStyles( styles )( Note );