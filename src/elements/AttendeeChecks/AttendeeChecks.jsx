
import React, { useEffect, useState } from 'react'
import { Step } from './Step'
import { EStatus, CHECKS, LOG_INIT, useMediaQuery } from './common'

const STYLES =
{
	outer : 
	{
		maxWidth : '1010px',
		margin : '0 auto',
		fontFamily : 'Lato, sans-serif',
		backgroundColor : '#22242A',
		color : '#ffffff',
		display : 'flex',
		flexDirection : 'column',
		height: '100vh',
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

	steps : isRowBased => (
	{
		display : 'flex',
		flexDirection : 'row',
		paddingTop : isRowBased ? '10vh' : '5vh',
		overflowX : 'hidden',
	}),

	checkContainer : isRowBased => (
	{
		paddingTop : isRowBased ? '10vh' : 'default',
		display: 'flex',
		width: '100%',
		flexDirection: isRowBased ? 'row' : 'column',
		justifyContent: isRowBased ? 'space-around' : 'space-between',
	}),

	complete : isRowBased => (
	{
		paddingTop : isRowBased ? 'default' : '5vh',
		textAlign : 'center',
		backgroundColor : '#222',
		fontFamily : 'HelveticaNeue-UltraLight, Lato, sans-serif',
		fontSize : '26px',
		letterSpacing : '1px',
		textShadow : ' .22px .22px #eee',
		color : '#ffffff',
	}),
}

export const AttendeeChecks = () =>
{
	const [checkLog, setCheckLog] = useState(LOG_INIT)
	const [stepIndex, setStepIndex] = useState(0)
	const [complete, setComplete] = useState(false)

	const isRowBased = useMediaQuery('(min-width: 900px)')

	const updateLog = ( index, result, aInfo ) =>
	{
		if ( index < CHECKS.length )
		{
			let stepName = CHECKS[ index ].name
			let nLog = { ...checkLog }

			nLog[stepName].value = result
			nLog[stepName].info  = aInfo

			setCheckLog( nLog )
		}
	}

	const nextStep = (result, aInfo = null) =>
	{
		if ( result === EStatus.PASSED || result === EStatus.FAILED )
		{
			const additionalInfo = aInfo ? aInfo : {}	// optional info to store with test status; currently unused?

			updateLog( stepIndex, result, additionalInfo )

			let newIndex = stepIndex + 1
			setStepIndex( stepIndex + 1 )
			updateLog( newIndex, EStatus.TESTING, additionalInfo )

			if ( newIndex === CHECKS.length )
				setComplete( true )
		}
	}

	const recordResult = ( passed, aInfo ) =>
	{
		nextStep( passed ? EStatus.PASSED : EStatus.FAILED, aInfo )
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
				isRowBased={ isRowBased }
				onComplete={ recordResult }
			/>
		)
	}

	useEffect( () =>
	{
		updateLog( 0, EStatus.TESTING )
			/* eslint-disable react-hooks/exhaustive-deps */
	}, [])

	const rerunChecks =()=> { window.location.reload() }

	return (
		<div style={ STYLES.outer }>

			<div style={ STYLES.header }>
				<div style={ STYLES.logo } />
				<button style={ STYLES.rerunChecks } onClick={rerunChecks}>Rerun Checks</button>
			</div>

			<div style={ STYLES.steps(isRowBased) }>
			{
				CHECKS.map( ({name}, index) =>
				(
				    <div key={name+'.'+index}>
					<Step
						key={ name }
						name={ name }
						number={ index + 1 }
						showLine={ index !== (CHECKS.length - 1) }
						status={ checkLog[name] }
					/>
				    </div>
				))
			}
			</div>

			<div style={ STYLES.checkContainer(isRowBased) }>
				{ complete && <div style={ STYLES.complete(isRowBased) }>Checks Complete!</div> }
				{ !complete && renderCheck() }
			</div>

		</div>
	)
}

export default AttendeeChecks

