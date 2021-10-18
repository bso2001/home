
import React, { useEffect, useState } from 'react'
import { Step } from './Step'
import { EStatus, CHECKS, LOG_INIT } from './common'

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

	header :
	{
		display : 'flex',
		justifyContent : 'space-between',
	},

	logo : 
	{
		backgroundImage : 'url(./buzzcast-logo-wide.5cc4a5d3.svg)',
		width : '128px',
		height: '30px',
	},

	rerunChecks : 
	{
		padding : '6px 18px',
		backgroundColor : 'transparent',
		border : '2px solid #444',
		fontSize : '12px',
		fontWeight : '600',
		color : '#aaa',
		cursor : 'pointer',
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
		if ( index < CHECKS.length )
		{
			let stepName = CHECKS[ index ].name
							// console.log('updateLog', index, stepName, result, checkLog)
			let nLog = { ...checkLog }

			nLog[stepName].value = result
			nLog[stepName].info  = info

			setCheckLog(nLog)
		}
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

	const recordResult = ( passed, info ) =>
	{
		nextStep(passed ? EStatus.PASSED : EStatus.FAILED, info)
	}

	const renderCheck =()=>
	{
		if ( stepIndex >= CHECKS.length )
			return <div></div>

		const name = CHECKS[ stepIndex ].name
		const img  = CHECKS[ stepIndex ].image
		const TheCheckModule = CHECKS[ stepIndex ].module
		
		return (
			<TheCheckModule
				key={ name }
				image={ img }
				title={ name }
				status={ checkLog[name] }
				onComplete={ recordResult }
			/>
		)
	}

	useEffect( () =>
	{
		nextStep( EStatus.TESTING )
			/* eslint-disable react-hooks/exhaustive-deps */
	}, [])

	const rerunChecks =()=> { window.location.reload() }

	return (
		<div style={ STYLES.outer }>

			<div style={ STYLES.header }>
				<div style={ STYLES.logo } />
				<button style={ STYLES.rerunChecks } onClick={rerunChecks}>Rerun Checks</button>
			</div>

			<div style={ STYLES.steps }>
			{
				CHECKS.map( ({name}, index) =>
				(
				    <div style={ STYLES.step } key={name+'.'+index}>
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

