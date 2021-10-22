
import React, {useEffect, useState} from 'react'

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
		height : '1px',
		width : '90px',
		margin : '20px 0 0 10px',
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
	const [lineStyle, setLineStyle] = useState({})
	const [numberStyle, setNumberStyle] = useState({})
	const [numberValue, setNumberValue] = useState(null)

	useEffect( () =>
	{
		setNumberValue( '' + number )

		if ( status.value === EStatus.PENDING )
		{
			setLineStyle({ ...STYLES.stepLine, borderTop : '1px dashed #444' })
			setNumberStyle( STYLES.stepNumber )
		}

		else if ( status.value === EStatus.TESTING )
		{
			setLineStyle({ ...STYLES.stepLine, borderTop : '1px dashed #469d8d0' })
			setNumberStyle({ ...STYLES.stepNumber, ...STYLES.stepNumberTesting })
		}

		else
		{
			setLineStyle({ ...STYLES.stepLine, borderTop : '1px solid #469d8d0' })
			setNumberStyle({ ...STYLES.stepNumber, ...STYLES.stepNumberComplete })
			setNumberValue( `<i class='fa fa-check'></i>` )
		}
	}, [status.value, number ])

console.log(name,status.value,lineStyle)
	return lineStyle && (
		<div style={ STYLES.step } key={name}>
			<div style={ STYLES.stepGraphics }>
				<div style={ numberStyle } dangerouslySetInnerHTML={{ __html: numberValue }} />
				<div style={ lineStyle }></div>
			</div>
			<div style={ STYLES.stepName }>{name}</div>
		</div>
	)
}

export default Step

