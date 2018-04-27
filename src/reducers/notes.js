const initialState =
	[
		{
			id: 0,
			title: 'This is a sheet of paper 1.',
			note: 'Lorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam quidem quo quos reiciendis repudiandae rerum sed totam ut velit voluptates! Dolores, hic!',
			editMode: false
		},
		{
			id: 1,
			title: 'This is a sheet of paper 2.',
			note: 'Lorem LoremLorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam quidem quo quos reiciendis repudiandae rerum sed totam ut velit voluptates! Dolores, hic!',
			editMode: false
		},
		{
			id: 2,
			title: 'This is a sheet of paper 3.',
			note: 'Lorem LoremLoremLorem ipsum dolor sitet exercitationem in magni modi, nesciunt placeat quas quasi qui quia quibusdam quidem quo quos reiciendis repudiandae rerum sed totam ut velit voluptates! Dolores, hic!',
			editMode: false
		},
	]


export default function notes( state = initialState ) {
	return state
}