
import React, {useEffect, useState} from 'react'

import { EStatus } from './common'

const STYLES =
{
	step : isMobile => (
	{
		width : isMobile ? 'default' : '130px',
	}),

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

	stepNumberComplete : (isMobile) => (
	{
		backgroundColor : '#4698d0',
		fontSize : '16px',
		paddingLeft : isMobile ? '15px' : '12px',
	}),

	stepLine : (isMobile) => (
	{
		borderTop : '1px solid #4698d0',
		height : '1px',
		width : isMobile ? '30px' : '60px',
		margin : '20px 0 0 15px',
	}),

	stepName : (isMobile) => (
	{
		marginTop : '20px',
		letterSpacing : '.8px',
		fontSize : '14px',
		fontWeight : '600',
		textAlign : isMobile ? 'center' : 'left',
	}),
}

export const Step = ({ name, number, showLine, status }) =>
{
	const [lineStyle, setLineStyle] = useState({})
	const [numberStyle, setNumberStyle] = useState({})
	const [numberValue, setNumberValue] = useState(null)

	const isMobile = ( showLine === EStatus.TESTING )

	useEffect( () =>
	{
		setNumberValue( '' + number )

		if ( status.value === EStatus.PENDING )
		{
			setLineStyle({ ...STYLES.stepLine(isMobile), borderTop : '1px dashed #606060' })
			setNumberStyle( STYLES.stepNumber )
		}

		else if ( status.value === EStatus.TESTING )
		{
			setLineStyle({ ...STYLES.stepLine(isMobile), borderTop : '1px dashed #4698d0' })
			setNumberStyle({ ...STYLES.stepNumber, ...STYLES.stepNumberTesting })
		}

		else
		{
			setLineStyle({ ...STYLES.stepLine(isMobile), borderTop : '1px solid #4698d0' })
			setNumberStyle({ ...STYLES.stepNumber, ...STYLES.stepNumberComplete(isMobile) })
			if ( ! isMobile )
			setNumberValue( `<i class='fa fa-check'></i>` )
		}
	}, [status.value, isMobile, number ])

	return lineStyle && (
		<div style={ STYLES.step(isMobile) } key={name}>
			<div style={ STYLES.stepGraphics }>
				{ isMobile && <div style={{ ...lineStyle, margin : '20px 20px 0 0' }} /> }
				<div style={ numberStyle } dangerouslySetInnerHTML={{ __html: numberValue }} />
				{ showLine && <div style={ lineStyle } /> }
			</div>
			<div style={ STYLES.stepName(isMobile) }>{name}</div>
		</div>
	)
}

export default Step

