export default theme => ({
	typography: {
		margin: theme.spacing.unit * 2,
	},

	button: {
		marginLeft: '10px',
	},
	raisedPrimary: {
		'&:hover': {
			backgroundColor: '#00C853',
		},
		backgroundColor: '#00E676',
	},
	controls: {
		position: 'absolute',
		bottom: '-20px',
		right: '0',
	},
	removeNoteControls: {
		textAlign: 'center',
		marginBottom: theme.spacing.unit * 2,
	}
});