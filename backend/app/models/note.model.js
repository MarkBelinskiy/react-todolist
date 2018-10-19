const mongoose = require( 'mongoose' );

const NoteSchema = mongoose.Schema( {
	title: String,
	note: mongoose.Schema.Types.Mixed
}, {
	timestamps: true
} );

module.exports = mongoose.model( 'Note', NoteSchema );
