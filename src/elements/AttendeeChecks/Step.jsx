
import React from 'react'

import { EStatus } from './constants'

const STYLES =
{
	step :
	{
	},

	stepGraphics :
	{
	},

	stepNumber :
	{
		width : '46px',
		height : '46px',
		borderRadius : '50px',
		border : '1px solid #444',
		boxSizing : 'border-box',
		padding : '11px 0 0 18px',
		fontSize : '14px',
		fontWeight : '600',
		color : '#ffffff',
	},

	stepNumberTesting :
	{
		border : '1px solid #4698d0',
		color : '#4698d0',
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

export const Step = ({ name, number, status }) =>
{
	let numberStyle = {}
	let lineStyle = {}

	if ( status.value === EStatus.PENDING )
		numberStyle = STYLES.stepNumber

	else if ( status.value === EStatus.TESTING )
		numberStyle = { ...STYLES.stepNumber, ...STYLES.stepNumberTesting }

	else
		numberStyle = { ...STYLES.stepNumber, ...STYLES.stepNumberComplete }

			// console.log( status.value, numberStyle )

	return (
		<div style={ STYLES.step } key={name}>
			<div style={ STYLES.stepGraphics }>
				<div style={ numberStyle }>{number}</div>
				<div style={ lineStyle }></div>
			</div>
			<div style={ STYLES.stepName }>{name}</div>
		</div>
	)
}

export default Step

