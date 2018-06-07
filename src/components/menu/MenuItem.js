import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const MenuItem = ( { title, iconURL, itemAction, addNewNote } ) => {
	const addNewList = () => console.log( 111 );

	const itemActionCompare = ( itemAction ) => {
		switch ( itemAction ) {
			case 'addNote' :
				return addNewNote;
			case 'addList' :
				return addNewList;
			default:
				return false
		}
	}
	return (
		<li>
			<Tooltip title={ title }
					 placement="top">
				<img onClick={ itemActionCompare( itemAction ) }
					 src={ iconURL }
					 alt={ title }/>
			</Tooltip>
		</li>
	)
}


MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	iconURL: PropTypes.string.isRequired,
	itemAction: PropTypes.string.isRequired,
	addNewNote: PropTypes.func.isRequired
};

export default MenuItem;