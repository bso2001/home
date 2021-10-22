
import React, {useEffect, useState} from 'react'

import { EStatus } from './common'

const STYLES =
{
	step :
	{
		width : '130px',
	},

	stepGraphics :
	{
		display : 'flex',
	},

	stepNumber :
	{
		width : '42px',
		height : '42px',
		borderRadius : '42px',
		border : '1px solid #606060',
		boxSizing : 'border-box',
		padding : '9px 0 0 16px',
		fontSize : '14px',
		fontWeight : '600',
		color : '#ffffff',
	},

	stepNumberTesting :
	{
		border : '1px solid #66b8f0',
		color : '#4698d0',
	},

	stepNumberComplete :
	{
		backgroundColor : '#4698d0',
		fontSize : '16px',
		paddingLeft : '12px',
	},

	stepLine :
	{
		borderTop : '1px solid #4698d0',
		height : '1px',
		width : '60px',
		margin : '20px 0 0 15px',
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
			setLineStyle({ ...STYLES.stepLine, borderTop : '1px dashed #606060' })
			setNumberStyle( STYLES.stepNumber )
		}

		else if ( status.value === EStatus.TESTING )
		{
			setLineStyle({ ...STYLES.stepLine, borderTop : '1px dashed #4698d0' })
			setNumberStyle({ ...STYLES.stepNumber, ...STYLES.stepNumberTesting })
		}

		else
		{
			setLineStyle({ ...STYLES.stepLine, borderTop : '1px solid #4698d0' })
			setNumberStyle({ ...STYLES.stepNumber, ...STYLES.stepNumberComplete })
			setNumberValue( `<i class='fa fa-check'></i>` )
		}
	}, [status.value, number ])

console.log(name,status.value,lineStyle)

	return lineStyle && (
		<div style={ STYLES.step } key={name}>
			<div style={ STYLES.stepGraphics }>
				<div style={ numberStyle } dangerouslySetInnerHTML={{ __html: numberValue }} />
				{ showLine && <div style={ lineStyle } /> }
			</div>
			<div style={ STYLES.stepName }>{name}</div>
		</div>
	)
}

export default Step

