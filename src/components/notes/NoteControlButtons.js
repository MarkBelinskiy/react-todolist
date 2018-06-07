import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './NoteControlButtonsStyles'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Zoom from '@material-ui/core/Zoom';
import Done from '@material-ui/icons/Done';
import Close from '@material-ui/icons/Close';
import Popover from '@material-ui/core/Popover';

class Note extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			anchorEl: null,
		};
	}

	openPopover = event => {
		this.setState( {
			anchorEl: event.currentTarget,
		} );
	};

	closePopover = () => {
		this.setState( {
			anchorEl: null,
		} );
	};

	render() {
		const { openPopover, closePopover } = this;
		const { triggerEditNote, removeNote, noteControls, classes } = this.props;
		const { anchorEl } = this.state;
		return (
			<div className={ classes.controls }>
				<Zoom in={ noteControls }>
					<Button variant="fab"
							mini
							color="primary"
							aria-label="edit"
							className={ classes.button }
							onClick={ triggerEditNote }>
						<EditIcon/>
					</Button>
				</Zoom>
				<Zoom in={ noteControls }
					  style={ { transitionDelay: noteControls ? 100 : 0 } }>
					<Button variant="fab"
							mini
							color="secondary"
							aria-label="add"
							className={ classes.button }
							onClick={ openPopover }
					>
						<DeleteIcon/>
					</Button>
				</Zoom>
				<Popover
					open={ Boolean( anchorEl ) }
					anchorEl={ anchorEl }
					onClose={ closePopover }
					anchorOrigin={ {
						vertical: 'top',
						horizontal: 'center',
					} }
					transformOrigin={ {
						vertical: 'bottom',
						horizontal: 'center',
					} }
				>
					<Typography className={ classes.typography }>
						Do you want to delete it? Are you sure?
					</Typography>

					<div className={ classes.removeNoteControls }>
						<Button variant="fab"
								mini
								color="primary"
								aria-label="save"
								className={ classes.button }
								classes={ { root: this.props.classes.raisedPrimary } }
								onClick={ removeNote }
						>
							<Done/>
						</Button>
						<Button variant="fab"
								mini
								color="secondary"
								aria-label="cancel"
								className={ classes.button }
								onClick={ closePopover }>
							<Close/>
						</Button>
					</div>
				</Popover>
			</div>
		);
	}
}

export default withStyles( styles )( Note );