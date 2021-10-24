
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

	errorIcon :
	{
		marginRight : '10px',
		width : '22px',
		height : '22px',
		borderRadius : '50px',
		backgroundColor : '#dd6a65',
		boxSizing : 'border-box',
		padding : '6px 0 0 9px',
		fontSize : '12px',
	},
}

export const Failed = ({ msg }) =>
{
	return (
		<div style={ STYLES.outer }>
			<i style={ STYLES.errorIcon } className={`fa fa-exclamation`}></i>
			<div style={ CSTYLES.checkMsg } dangerouslySetInnerHTML={{ __html: msg ? msg : `Failed` }} />
		</div>
	)
}

