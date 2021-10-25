
export const CSTYLES =
{
	outer : inColumns => (
	{
		display : 'flex',
		flexDirection : 'inherit',
		width : '100%',
		alignItems : inColumns ? 'center' : 'default',
	}),

	cell : inColumns => (
	{
		flex : '1',
		display : 'flex',
		flexDirection : 'column',
		paddingTop: inColumns ? '20px' : '0px',
		minHeight: inColumns ? 'default' : '180px',
		alignItems : inColumns ? 'center' : 'left',
		justifyContent : inColumns ? 'flex-start' : 'flex-end',
	}),

	resultCell : inColumns => (
	{
		margin : '0 2vw',
	}),

	image : inColumns => (
	{
		height: inColumns ? '20vh' : '30vh',
		width : 'auto',
		maxWidth : inColumns ? '500px' : 'default',
	}),

	title : inColumns => (
	{
		paddingBottom : inColumns ? '2vh' : '4vh',
		fontSize : '18px',
		fontWeight : '600',
		color : '#eee',
	}),

	result : inColumns => (
	{
		textAlign : inColumns ? 'center' : 'left',
		paddingTop : '4vh',
		minHeight: inColumns ? '50px' : 'default',
		fontSize : '15px',
		lineHeight :  '24px',
		fontWeight : '400',
		color : '#eee',
	}),

	button : inColumns => (
	{
		backgroundColor : '#4698d0',
		border : '0',
		width : inColumns ? '65vw' : '180px',
		height : '45px',
		fontSize : '15px',
		fontWeight : '600',
		color : '#ddf',
		cursor : 'pointer',
		marginTop : '2vh',
		alignSelf : 'flex-end',
	}),

	noButton :
	{
		backgroundColor : '#dd6a65',
	},

	checkMsg :
	{
		fontSize : '15px',
		color : '#eee',
	},
}
 
export function resultCellStyle( inColumns )
{
	return { ...CSTYLES.cell( inColumns ), ...CSTYLES.resultCell( inColumns ) }
}

