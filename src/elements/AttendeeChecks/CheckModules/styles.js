
export const CSTYLES =
{
	outer : isRowBased => (
	{
		display : 'flex',
		flexDirection : 'inherit',
		width : '100%',
		alignItems : isRowBased ? 'stretch' : 'center',
	}),

	column : isRowBased => (
	{
		paddingRight : '1vw',
		flex : '1',
		display : 'flex',
		flexDirection : 'column',
		marginTop: isRowBased ? '0px' : '40px',
		minHeight: isRowBased ? '180px' : 'default',
		alignItems : isRowBased ? 'left' : 'center',
		justifyContent : isRowBased ? 'left' : 'center',
	}),

	image : isRowBased => (
	{
		width : isRowBased ? '24vw' : '40vw',
		height: '24vh',
	}),

	title :
	{
		paddingBottom : '4vh',
		fontSize : '20px',
		fontWeight : '600',
		color : '#eee',
	},

	result :
	{
		maxWidth : '70%',
		fontSize : '15px',
		lineHeight :  '24px',
		fontWeight : '400',
		color : '#eee',
	},

	button : 
	{
		backgroundColor : '#4698d0',
		border : '0',
		width : '180px',
		height : '45px',
		fontSize : '15px',
		fontWeight : '600',
		color : '#ddf',
		cursor : 'pointer',
	},

	noButton :
	{
		backgroundColor : '#dd6a65',
	}
}

