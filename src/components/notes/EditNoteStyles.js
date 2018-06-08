export default theme => ({

	input: {
		color: 'rgba(0, 0, 0, 0.87)',
		fontSize: '1.5rem',
		fontWeight: 400,
		textAlign: 'center',
		marginBottom: '8px',
		padding: '0',

	},
	textarea: {
		color: 'rgba(0, 0, 0, 0.87)',
		fontSize: '0.875rem',
		fontWeight: 400,
		textAlign: 'justify',
		marginBottom: '8px',
		lineHeight: '1.46429em',
		padding: 0,
	},
	raisedPrimary: {
		'&:hover': {
			backgroundColor: '#00C853',
		},
		backgroundColor: '#00E676',
	},
	formControl: {
		width: '100%',
	},
	paper: {
		position: 'relative',
		padding: theme.spacing.unit * 2,
		width:'700px',
		textAlign: 'center',
		height: '90%',
		color: theme.palette.text.secondary,
	},
	button: {
		marginLeft: '10px',
	},
	controls: {
		position: 'absolute',
		bottom: '-20px',
		right: '0',
	},
});
