
export const CSTYLES =
{
	outer : isRowBased => (
	{
		display : 'flex',
		flexDirection : 'inherit',
		width : '100%',
		alignItems : isRowBased ? 'default' : 'center',
	}),

	cell : isRowBased => (
	{
		flex : '1',
		display : 'flex',
		flexDirection : 'column',
		paddingTop: isRowBased ? '0px' : '30px',
		minHeight: isRowBased ? '180px' : 'default',
		alignItems : isRowBased ? 'left' : 'center',
		justifyContent : isRowBased ? 'flex-end' : 'flex-start',
	}),

	resultCell : isRowBased => (
	{
		margin : '0 2vw',
		minHeight : '18vh',
		height: isRowBased ? 'default' : '200px',
	}),

	image : isRowBased => (
	{
		height: isRowBased ? '30vh' : '22vh',
		width : 'auto',
		maxWidth : isRowBased ? 'default' : '500px',
	}),

	title : isRowBased => (
	{
		paddingBottom : isRowBased ? '4vh' : '2vh',
		fontSize : '18px',
		fontWeight : '600',
		color : '#eee',
	}),

	result : isRowBased => (
	{
		textAlign : isRowBased ? 'left' : 'center',
		paddingTop : '4vh',
		minHeight: isRowBased ? 'default' : '50px',
		fontSize : '15px',
		lineHeight :  '24px',
		fontWeight : '400',
		color : '#eee',
	}),

	button : isRowBased => (
	{
		backgroundColor : '#4698d0',
		border : '0',
		width : isRowBased ? '180px' : '65vw',
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
 
export function resultCellStyle(isRowBased)
{
	return { ...CSTYLES.cell(isRowBased), ...CSTYLES.resultCell(isRowBased) }
}

