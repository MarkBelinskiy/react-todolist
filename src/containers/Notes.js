import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Notes.scss'
import uuidv4 from 'uuid/v4';
import Note from '../components/notes/Note';
import * as noteActions from '../actions/index'
import Packery from 'packery';


class Notes extends Component {

	packery = () => new Packery( document.querySelector( '.grid' ), {
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		gutter: '.gutter-sizer',
		percentPosition: true,
	} );

	componentDidMount() {
		const packery = this.packery();
		packery.layout();
	}

	componentDidUpdate() {
		const packery = this.packery();
		packery.layout();
	}

	render() {
		const { notes, removeNote, updateNote } = this.props;

		return (
			<div className="notes-container">
				<div className="grid">
					<div className="grid-sizer">.</div>
					<div className="gutter-sizer">.</div>
					{ (notes.length === 0) ?
						<p>Soryan, there are no notes, yet. Create your first note!</p> :
						notes.map( noteItem =>
							<Note key={ uuidv4() } data={ { ...noteItem } } removeNote={ removeNote }
								  updateNote={ updateNote }/>
						)
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { notes: state.notes };
};

const mapDispatchToProps = dispatch => {

	return {
		removeNote: ( id ) => {
			dispatch( noteActions.removeNote( id ) )
		},
		updateNote: noteItem => {
			dispatch( noteActions.updateNote( noteItem ) );
		},
	}
};


export default connect( mapStateToProps, mapDispatchToProps )( Notes )
