
import React from 'react'

export const STYLES =
{
	outer : 
	{
		display : 'flex',
		flexDirection : 'row',
	},

	okayIcon :
	{
		marginRight : '10px',
		width : '22px',
		height : '22px',
		borderRadius : '50px',
		backgroundColor : '#4698d0',
		border : '0',
		boxSizing : 'border-box',
		padding : '5px 0 0 5px',
		fontSize : '12px',
		fontWeight : '300',
		color : '#ffffff',
	},

	msg :
	{
		fontSize : '15px',
		color : '#eee',
	},
}

export const Passed = ({ msg }) =>
{
	return (
		<div style={ STYLES.outer }>
			<i style={ STYLES.okayIcon } className={'fa fa-check'}></i>
			<div style={ STYLES.msg } dangerouslySetInnerHTML={{ __html: msg ? msg : `Passed` }} />
		</div>
	)
}

