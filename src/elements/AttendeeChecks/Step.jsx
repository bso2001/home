
import React, {useEffect, useState} from 'react'

import { EStatus } from './common'

const STYLES =
{
	step : inColumns => (
	{
		width : inColumns ? 'default' : '130px',
	}),

	stepGraphics :
	{
		display : 'flex',
	},

	stepNumber : (inColumns) => (
	{
		width : inColumns ? '36px' : '42px',
		height : inColumns ? '36px' : '42px',
		borderRadius : inColumns ? '36px' : '42px',
		border : '1px solid #606060',
		boxSizing : 'border-box',
		padding : '9px 0 0 16px',
		fontSize : inColumns ? '12px' : '14px',
		fontWeight : '600',
		color : '#ffffff',
	}),

	stepNumberTesting :
	{
		border : '1px solid #66b8f0',
		color : '#4698d0',
	},

	stepNumberComplete : (inColumns) => (
	{
		backgroundColor : '#4698d0',
		fontSize : '16px',
		paddingLeft : inColumns ? '13px' : '12px',
		paddingTop : inColumns ? '5px' : 'default',
	}),

	stepLine : (inColumns) => (
	{
		borderTop : '1px solid #4698d0',
		height : '1px',
		width : inColumns ? '30px' : '60px',
		margin : '20px 0 0 15px',
	}),

	stepName : (inColumns) => (
	{
		marginTop : inColumns ? '10px' : '20px',
		letterSpacing : '.8px',
		fontSize : '14px',
		fontWeight : '600',
		textAlign : inColumns ? 'center' : 'left',
	}),
}

export const Step = ({ name, number, showLine, status }) =>
{
	const [lineStyle, setLineStyle] = useState({})
	const [numberStyle, setNumberStyle] = useState({})
	const [numberValue, setNumberValue] = useState(null)

	const inColumns = ( showLine === EStatus.TESTING )

	useEffect( () =>
	{
		setNumberValue( '' + number )

		if ( status.value === EStatus.PENDING )
		{
			setLineStyle({ ...STYLES.stepLine(inColumns), borderTop : '1px dashed #606060' })
			setNumberStyle( STYLES.stepNumber(inColumns) )
		}

		else if ( status.value === EStatus.TESTING )
		{
			setLineStyle({ ...STYLES.stepLine(inColumns), borderTop : '1px dashed #4698d0' })
			setNumberStyle({ ...STYLES.stepNumber(inColumns), ...STYLES.stepNumberTesting })
		}

		else
		{
			setLineStyle({ ...STYLES.stepLine(inColumns), borderTop : '1px solid #4698d0' })
			setNumberStyle({ ...STYLES.stepNumber(inColumns), ...STYLES.stepNumberComplete(inColumns) })
			if ( ! inColumns )
			setNumberValue( `<i class='fa fa-check'></i>` )
		}
	}, [status.value, inColumns, number ])

	return lineStyle && (
		<div style={ STYLES.step(inColumns) } key={name}>
			<div style={ STYLES.stepGraphics }>
				{ inColumns && <div style={{ ...lineStyle, margin : '20px 20px 0 0' }} /> }
				<div style={ numberStyle } dangerouslySetInnerHTML={{ __html: numberValue }} />
				{ showLine && <div style={ lineStyle } /> }
			</div>
			{ !inColumns && <div style={ STYLES.stepName(inColumns) }>{name}</div> }
		</div>
	)
}

export default Step

