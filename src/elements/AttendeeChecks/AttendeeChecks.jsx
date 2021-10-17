
import React, { useState } from 'react'
import { Step } from './Step'
import { CHECKS, LOG_INIT } from './constants'

const STYLES =
{
	outer : 
	{
		fontFamily : 'Lato, sans-serif',
		backgroundColor : '#22242A',
		color : '#ffffff',
		display : 'flex',
		flexDirection : 'column',
		height: '100%',
		padding : '5vh 10vw',
	},

	logo : 
	{
		backgroundImage : 'url(./buzzcast-logo-wide.5cc4a5d3.svg)',
		width : '128px',
		height: '30px',
	},

	steps :
	{
		display : 'flex',
		flexDirection : 'row',
		justifyContent : 'space-between',
		paddingTop : '10vh',
	},

	checkContainer :
	{
		paddingTop : '100px',
		display: 'flex',
		width: '100%',
	},
}

export const AttendeeChecks = () =>
{
	const [checkLog, setCheckLog] = useState(LOG_INIT)
	const [stepIndex, setStepIndex] = React.useState(0)

	const recordResult = ( name, status, info ) =>
	{
		setCheckLog( { ...checkLog, [name]: { status, info } })

		setStepIndex( stepIndex + 1 )
	}

	return (
		<div style={ STYLES.outer }>

			<div style={ STYLES.logo } />

			<div style={ STYLES.steps }>
			{
				CHECKS.map( ({ name, TheCheckModule }, index) =>
				(
					<Step
						key={name}
						name={name}
						number={index + 1}
						status={checkLog[name]}
					/>
				))
			}
			</div>

			<div style={ STYLES.checkContainer }>
			{
				CHECKS.map( ( {name, TheCheckModule}, index ) =>
				(
					<TheCheckModule
						key={name}
						name={name}
						status={checkLog[name]}
						onComplete={recordResult}
					/>
				))
			}
			</div>

		</div>
	)
}

export default AttendeeChecks

