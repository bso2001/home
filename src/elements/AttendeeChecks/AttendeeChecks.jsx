
import React, { useEffect, useState } from 'react'
import { Step } from './Step'
import { EStatus, CHECKS, LOG_INIT } from './constants'

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

	step :
	{
		maxWidth : '100px',
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
	const [stepIndex, setStepIndex] = useState(0)

	const updateLog = ( index, result, info ) =>
	{
		let stepName = CHECKS[ index ].name
							console.log('updateLog', index, stepName, result, checkLog)
		let nLog = { ...checkLog }

		nLog[stepName].value = result
		nLog[stepName].info  = info

		setCheckLog(nLog)
	}

	const nextStep = (result, additionalInfo = null) =>
	{
		updateLog( stepIndex, result, additionalInfo ? additionalInfo : {} )

		if ( additionalInfo )
		{
			let newIndex = stepIndex + 1
			setStepIndex( stepIndex + 1 )
			updateLog( newIndex, EStatus.TESTING, additionalInfo )
		}
	}

	const recordResult = ( status, info ) =>
	{
		nextStep(status, info)
	}

	const renderCheck =()=>
	{
		const currentStep = CHECKS[ stepIndex ].name
		const TheCheckModule = CHECKS[ stepIndex ].module
		
		return (
			<TheCheckModule
				key={currentStep}
				status={checkLog[currentStep]}
				onComplete={recordResult}
			/>
		)
	}

	useEffect( () =>
	{
		nextStep( EStatus.TESTING )
			/* eslint-disable react-hooks/exhaustive-deps */
	}, [])

	return (
		<div style={ STYLES.outer }>

			<div style={ STYLES.logo } />

			<div style={ STYLES.steps }>
			{
				CHECKS.map( ({name}, index) =>
				(
				    <div style={ STYLES.step }>
					<Step
						key={ name }
						name={ name }
						number={ index + 1 }
						status={ checkLog[name] }
					/>
				    </div>
				))
			}
			</div>

			<div style={ STYLES.checkContainer }>
				{ renderCheck() }
			</div>

		</div>
	)
}

export default AttendeeChecks

