
import React from 'react'
import { CSTYLES } from './styles'

export const STYLES =
{
	outer : 
	{
		display : 'flex',
		flexDirection : 'row',
		width : '100%',
		justifyContent : 'inherit',
	},

	okayIcon :
	{
		margin : '2px 10px 0 0',
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
}

export const Okay = ({ msg }) =>
{
	return (
		<div style={ STYLES.outer }>
			<i style={ STYLES.okayIcon } className={'fa fa-check'}></i>
			<div style={ CSTYLES.result } dangerouslySetInnerHTML={{ __html: msg }} />
		</div>
	)
}

