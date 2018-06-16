import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditNoteSortableList from './EditNoteSortableList'
import './EditNoteDescriptionView.scss'
import { arrayMove } from 'react-sortable-hoc';


class EditNoteDescriptionView extends Component {
	onSortStart = () => {
		document.body.className = 'dragging-list';
	};

	onSortEnd = ( { oldIndex, newIndex } ) => {
		const { noteData, handleListChange } = this.props;

		document.body.className = '';
		handleListChange( arrayMove( noteData, oldIndex, newIndex ) );
	};


	handleListItemNameChange = ( currentId ) => ( e ) => {
		const { noteData, handleListChange } = this.props;

		const newListItems = noteData.map( ( noteListItem, listItemId ) =>
			currentId !== listItemId ? noteListItem : { ...noteListItem, title: e.target.value }
		);
		handleListChange( newListItems );
	};


	handleAddListItem = () => {
		const { noteData, handleListChange } = this.props;
		handleListChange( noteData.concat( [ { title: '', done: false } ] ) );
	};

	handleCheckChangeListItem = ( currentId ) => () => {
		const { noteData, handleListChange } = this.props;
		const newListItems = noteData.map( ( noteListItem, listItemId ) =>
			currentId !== listItemId ? noteListItem : { ...noteListItem, done: !noteListItem.done }
		);
		handleListChange( newListItems );
	};

	handleRemoveListItem = ( currentId ) => () => {
		const { noteData, handleListChange } = this.props;
		handleListChange( noteData.filter( ( s, listItemId ) => currentId !== listItemId ) );
	};

	render() {
		const { noteData, handleSingleInputChange } = this.props;
		return (
			<div>
				{ Array.isArray( noteData ) ?
					<div>
						<EditNoteSortableList items={ noteData }
											  helperClass="dragging-list-item"
											  onSortStart={ this.onSortStart }
											  onSortEnd={ this.onSortEnd }
											  lockToContainerEdges={ true }
											  useDragHandle={ true }
											  lockAxis="y"

											  handleCheckChangeListItem={ this.handleCheckChangeListItem }
											  handleListItemNameChange={ this.handleListItemNameChange }
											  handleRemoveListItem={ this.handleRemoveListItem }
						/>

						<ListItem button onClick={ this.handleAddListItem } className="add-new">
							<AddIcon/>
						</ListItem>
					</div>
					:
					<TextField
						label="Your note"
						fullWidth
						multiline
						rowsMax="18"
						className="note-text"
						value={ noteData }
						margin="normal"
						onChange={ handleSingleInputChange }
						name="note"
					/>
				}
			</div>
		);
	}
}

export default EditNoteDescriptionView;