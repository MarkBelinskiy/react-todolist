import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { SortableContainer, SortableElement, SortableHandle, } from 'react-sortable-hoc';


const DragHandle = SortableHandle( () => <DragHandleIcon className="drag-item"/> );


const SortableItem = SortableElement( ( { index, value, handleCheckChangeListItem, handleListItemNameChange, handleRemoveListItem } ) => {
	return (
		<ListItem key={ index } className="list-item">
			<DragHandle/>
			<Checkbox
				onChange={ handleCheckChangeListItem }
				checked={ value.done }
			/>
			<TextField
				fullWidth
				multiline
				autoFocus
				rowsMax="18"
				className="note-text"
				margin="normal"
				value={ value.title }
				inputProps={ { className: 'textarea' } }
				placeholder={ `New Task` }
				onChange={ handleListItemNameChange }
				name="title"
			/>
			<CloseIcon className="remove-item" onClick={ handleRemoveListItem }/>
		</ListItem>
	);
} );


const EditNoteSortableList = SortableContainer( ( { items, handleCheckChangeListItem, handleListItemNameChange, handleRemoveListItem } ) => {
	return (
		<List className="todo-list">
			{ items.map( ( noteListItem, currentId ) => (
				<SortableItem key={ `item-${currentId}` } index={ currentId } value={ noteListItem }
							  handleCheckChangeListItem={ handleCheckChangeListItem( currentId ) }
							  handleListItemNameChange={ handleListItemNameChange( currentId ) }
							  handleRemoveListItem={ handleRemoveListItem( currentId ) }
				/>
			) ) }
		</List>
	);
} );

export default EditNoteSortableList;