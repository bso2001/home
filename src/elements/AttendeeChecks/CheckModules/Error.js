
import React from 'react'
import { CSTYLES } from './styles'

export const STYLES =
{
	errorIcon :
	{
		margin : '2px 10px 0 0',
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
}

export const Error = ({ msg }) =>
{
	return (
		<div style={ CSTYLES.outer }>
			<i style={ STYLES.errorIcon } className={'fa fa-exclamation'}></i>
			<div style={ CSTYLES.result } dangerouslySetInnerHTML={{ __html: msg }} />
		</div>
	)
}

