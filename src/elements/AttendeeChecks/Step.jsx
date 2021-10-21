
import React from 'react'

import { EStatus } from './common'

const STYLES =
{
	step :
	{
		width : '160px',
	},

	stepGraphics :
	{
		display : 'flex',
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
		fontSize : '16px',
		paddingLeft : '14px',
	},

	stepLine :
	{
		borderTop : '1px dashed #444',
		height : '1px',
		width : '90px',
		margin : '20px 0 0 10px',
	},

	stepLineTesting :
	{
		borderTop : '1px dashed #469d8d0',
		height : '5px',
	},

	stepLineComplete :
	{
		borderTop : '1px solid #469d8d0',
		height : '10px',
	},

	stepName :
	{
		marginTop : '20px',
		letterSpacing : '.8px',
		fontSize : '14px',
		fontWeight : '600',
	},
}

export const Step = ({ name, number, showLine, status }) =>
{
	let lineStyle = {}
	let numberStyle = {}
	let numberValue = '' + number

	if ( status.value === EStatus.PENDING )
	{
		lineStyle = STYLES.stepLine
		numberStyle = STYLES.stepNumber
	}

	else if ( status.value === EStatus.TESTING )
	{
		lineStyle = { ...STYLES.stepLine, ...STYLES.stepLineTesting }
		numberStyle = { ...STYLES.stepNumber, ...STYLES.stepNumberTesting }
	}

	else
	{
		lineStyle = { ...STYLES.stepLine, ...STYLES.stepLineComplete }
		numberStyle = { ...STYLES.stepNumber, ...STYLES.stepNumberComplete }
		numberValue = "<i class='fa fa-check'></i>"
	}

	return (
		<div style={ STYLES.step } key={name}>
			<div style={ STYLES.stepGraphics }>
				<div style={ numberStyle } dangerouslySetInnerHTML={{ __html: numberValue }} />
				{ showLine && <div style={ lineStyle }>&nbsp;</div> }
			</div>
			<div style={ STYLES.stepName }>{name}</div>
		</div>
	)
}

export default Step

