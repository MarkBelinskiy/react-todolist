import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditNote from '../notes/EditNote';
import Grow from '@material-ui/core/Grow';


function DialogTransition( props ) {
	return <Grow direction="up" { ...props } />;
}

const MenuDialog = ( { open, refTitle, title, noteType, popupCloseMethod, submitMethod } ) => {
	console.log( this[ refTitle ] );
	return (
		<Dialog
			PaperProps={ { className: 'dialog' } }
			open={ open }
			onClose={ () => { this[ refTitle ].handleClearForm() } }
			TransitionComponent={ DialogTransition }
			keepMounted
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle className="dialog-title" id="form-dialog-title">{ title }</DialogTitle>
			<EditNote
				data={ {
					title: '',
					note: noteType,
				} }

				ref={ e => { this[ refTitle ] = e} }
				submitMethod={ submitMethod }
				popupCloseMethod={ popupCloseMethod }
			/>
		</Dialog>
	);
};


export default MenuDialog;