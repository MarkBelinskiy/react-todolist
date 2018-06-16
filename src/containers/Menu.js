import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import MenuItem from '../components/menu/MenuItem';
import './Menu.scss';
import * as noteActions from '../actions/index'

import MenuDialog from '../components/menu/MenuDialog';


class Menu extends Component {

	triggerPopupNote = () => {
		this.setState( { openNote: !this.state.openNote } );
	};
	triggerPopupList = () => {
		this.setState( { openList: !this.state.openList } );
	};

	constructor( props ) {
		super( props );
		this.state = {
			openNote: false,
			openList: false,
		};
	}

	render() {
		const { menu, addNewNote } = this.props;
		const { openNote, openList } = this.state;
		return (
			<div className="actions-menu-wrapper">
				{ (menu.length === 0) ?
					<p>Soryan, there is no actions, yet</p> :
					<div>
						<ul className="actions-menu">
							{ menu.map( menuItem =>
								<MenuItem key={ uuidv4() } { ...menuItem }
										  openPopupNote={ this.triggerPopupNote }
										  openPopupList={ this.triggerPopupList }
								/>,
							) }
						</ul>
						<MenuDialog open={ openNote }
									refTitle='Note'
									title="Add Note"
									noteType={ '' }
									submitMethod={ ( noteItem ) => {addNewNote( noteItem )} }
									popupCloseMethod={ this.triggerPopupNote }
						/>
						<MenuDialog open={ openList }
									refTitle='List'
									title="Add List"
									noteType={ [] }
									submitMethod={ ( noteItem ) => {addNewNote( noteItem )} }
									popupCloseMethod={ this.triggerPopupList }
						/>
					</div>
				}
			</div>
		);
	}
}

Menu.propTypes = {
	menu: PropTypes.arrayOf( PropTypes.shape( {
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		iconURL: PropTypes.string.isRequired,
		itemAction: PropTypes.string.isRequired,
	} ).isRequired ).isRequired,
	addNewNote: PropTypes.func.isRequired,
};
Menu.defaultProps = {
	menu: [],
};

const mapStateToProps = state => {
	return { menu: state.menu };
};

const mapDispatchToProps = dispatch => {


	function addNewNote( noteItem ) {
		dispatch( noteActions.addNote( noteItem ) );
	}

	return {
		addNewNote
	}
};

export default connect( mapStateToProps, mapDispatchToProps )( Menu );