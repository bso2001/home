
import React from 'react'

const STYLES =
{
	step :
	{
	},

	stepHeader :
	{
	},

	stepNumber :
	{
		width : '45px',
		height : '45px',
		borderRadius : '50px',
		border : '1px solid #444',
		boxSizing : 'border-box',
		padding : '10px 0 0 17px',
		fontSize : '14px',
		fontWeight : '600',
	},

	stepNumberComplete :
	{
		backgroundColor : '#4698d0',
	},

	stepLine :
	{
	},

	stepName :
	{
		marginTop : '20px',
		letterSpacing : '.8px',
		fontSize : '14px',
		fontWeight : '600',
	},
}

export const Step = ({ name, number }) =>
{
	return (
		<div style={ STYLES.step } key={name}>
			<div style={ STYLES.stepGraphics }>
				<div style={ STYLES.stepNumber }>{number}</div>
				<div style={ STYLES.stepLine }></div>
			</div>
			<div style={ STYLES.stepName }>{name}</div>
		</div>
	)
}

export default Step

