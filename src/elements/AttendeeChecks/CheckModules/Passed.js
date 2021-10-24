
import React from 'react'
import { CSTYLES } from './styles'

export const STYLES =
{
	outer : 
	{
		display : 'flex',
		flexDirection : 'row',
		paddingBottom : '10px',
	},

	okayIcon :
	{
		marginRight : '10px',
		width : '22px',
		height : '22px',
		borderRadius : '50px',
		backgroundColor : '#4698d0',
		boxSizing : 'border-box',
		padding : '5px 0 0 5px',
		fontSize : '12px',
	},
}

export const Passed = ({ label, msg }) =>
{
	return (
		<div style={ STYLES.outer }>
			<i style={ STYLES.okayIcon } className={'fa fa-check'}></i>
			<div style={ CSTYLES.checkMsg } dangerouslySetInnerHTML={{ __html: msg ? msg : `Passed` }} />
		</div>
	)
}

