import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import MenuItem from '../components/menu/MenuItem';
import '../components/menu/Menu.css';
import * as noteActions from '../actions/index'

class Menu extends Component {
	render() {
		const menuData = this.props.menu;
		return (
			<div className="actions-menu-wrapper">
				<ul className="actions-menu">
					{ (menuData.length === 0) ?
						<p>Soryan, there is no actions, yet</p> :
						menuData.map( menuItem =>
							<MenuItem key={ uuidv4() } { ...menuItem } addNewNote={ () => {this.props.addNewNote()} }/>,
						)
					}
				</ul>
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
}

const mapDispatchToProps = dispatch => {
	function addNewNote() {
		dispatch( noteActions.addToDo() )
	}

	return {
		addNewNote
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Menu );