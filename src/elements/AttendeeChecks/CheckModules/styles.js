
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
		flex : '1',
		display : 'flex',
		flexDirection : 'column',
		paddingTop: isRowBased ? '0px' : '30px',
		minHeight: isRowBased ? '180px' : 'default',
		alignItems : isRowBased ? 'left' : 'center',
		justifyContent : isRowBased ? 'flex-end' : 'flex-start',
	}),

	middleColumn : isRowBased => (
	{
		margin : '0 2vw',
		justifyContent : isRowBased ? 'normal' : 'center',
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
		fontSize : '20px',
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
		width : '180px',
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
	}
}
 
export function middleColumnStyle(isRowBased)
{
	return { ...CSTYLES.column(isRowBased), ...CSTYLES.middleColumn(isRowBased) }
}

