
import React from 'react'

export const STYLES =
{
	outer : 
	{
		display : 'flex',
		flexDirection : 'row',
	},

	errorIcon :
	{
		marginRight : '10px',
		width : '22px',
		height : '22px',
		borderRadius : '50px',
		backgroundColor : '#dd6a65',
		border : '0',
		boxSizing : 'border-box',
		padding : '6px 0 0 9px',
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

export const Failed = ({ msg }) =>
{
	return (
		<div style={ STYLES.outer }>
			<i style={ STYLES.errorIcon } className={`fa fa-exclamation`}></i>
			<div style={ STYLES.msg } dangerouslySetInnerHTML={{ __html: msg ? msg : `Failed` }} />
		</div>
	)
}

