import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import './NoteDescriptionView.scss'

class NoteDescriptionView extends Component {

	render() {
		const { noteData } = this.props;
		return (
			<div>
				{ Array.isArray( noteData ) ?
					<List>
						{ noteData.map( listItem =>
							<div key={ uuidv4() } className="list-item">
								<ListItem className={ listItem.done ? "done" : 'not-done' }>
									<ListItemIcon className="icon">
										{ listItem.done ?
											<FiberManualRecord/>
											:
											<RadioButtonUnchecked/>
										}
									</ListItemIcon>
									<ListItemText primary={ listItem.title }
												  className="text-wrap"
												  classes={ { primary: "text" } }/>
								</ListItem>
							</div>
						) }
					</List>
					:
					<Typography component="p" align="justify">
						{ noteData }
					</Typography>
				}
			</div>
		);
	}
}

export default NoteDescriptionView