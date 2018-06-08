import React, { Component } from 'react';
import { connect } from 'react-redux';
import  './Notes.scss'
import uuidv4 from 'uuid/v4';
import NoteController from './NoteController';
import * as noteActions from '../actions/index'

import Packery from 'packery';
import Draggabilly from 'draggabilly';


class Notes extends Component {

	packery = () => new Packery( document.querySelector( '.grid' ), {
		// options
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		gutter: '.gutter-sizer',
		percentPosition: true,
	} )

	componentDidMount() {
		const parck = this.packery();

		// document.querySelector( '.grid-item' ).addEventListener("resize", console.log(123));


		// parck.getItemElements().map( itemElem => parck.bindDraggabillyEvents( new Draggabilly( itemElem ) ) );

		console.log( 'didM' );
	}

	componentDidUpdate() {
		// console.log(this.packery);
		const parck = this.packery();
		// parck.getItemElements().map( itemElem => parck.bindDraggabillyEvents( new Draggabilly( itemElem ) ) );


		console.log( parck.layout );
		parck.layout()


		// this.packery().destroy

	}

	render() {
		const { classes, notes, removeNote } = this.props;

		return (
			<div className="notes-container">
				<div className="grid">
					<div className="grid-sizer"></div>
					<div className="gutter-sizer"></div>
					{ (notes.length === 0) ?
						<p>Soryan, there are no notes, yet. Create your first note!</p> :
						notes.map( noteItem =>
							<NoteController key={ uuidv4() } data={ { ...noteItem } } removeNote={ removeNote }/>
						)
					}
				</div>


				{ /*<Grid container
				 spacing={ 24 }>
				 { (notes.length === 0) ?
				 <p>Soryan, there are no notes, yet. Create your first note!</p> :
				 notes.map( noteItem =>
				 <NoteController key={ uuidv4() } data={ { ...noteItem } } removeNote={ removeNote }/>
				 )
				 }
				 </Grid>*/ }
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { notes: state.notes };
}

const mapDispatchToProps = dispatch => {

	return {
		removeNote: ( id ) => {
			dispatch( noteActions.removeNote( id ) )
		}
	}
}


export default connect( mapStateToProps, mapDispatchToProps )( Notes )
