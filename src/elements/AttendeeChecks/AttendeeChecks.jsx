
import React, { useEffect, useState } from 'react'
import { Step } from './Step'
import { EStatus, CHECKS, LOG_INIT, useMediaQuery } from './common'

const STYLES =
{
	outer : 
	{
		maxWidth : '840px',
		margin : '0 auto',
		fontFamily : 'Lato, sans-serif',
		backgroundColor : '#22242A',
		color : '#ffffff',
		display : 'flex',
		flexDirection : 'column',
		height: '100vh',
		padding : '5vh 10px',
	},

	header : inColumns => (
	{
		display : 'flex',
		justifyContent : inColumns ? 'space-around' : 'space-between',
	}),

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
		fontWeight : '800',
		color : '#aaa',
		cursor : 'pointer',
	},

	steps : inColumns => (
	{
		display : 'flex',
		flexDirection : 'row',
		paddingTop : '5vh',
		overflowX : 'hidden',
	}),

	mobileStep :
	{
		display : 'flex',
		flexDirection : 'column',
		paddingTop : '4vh',
		overflowX : 'hidden',
		alignItems : 'center',
	},

	mainContainer : inColumns => (
	{
		paddingTop : inColumns ? 'default' : '10vh',
		display: 'flex',
		width: '100%',
		height: inColumns ? 'fit-content' : 'default',
		flexDirection: inColumns ? 'column' : 'row',
		justifyContent: inColumns ? 'space-between' : 'space-between',
	}),

	checkContainer : inColumns => (
	{
		display: 'flex',
		flexDirection : inColumns ? 'column' : 'row',
		width : '100%',
	}),

	imageContainer :
	{
		textAlign : 'center',
	},

	image : inColumns => (
	{
		height: inColumns ? '20vh' : '30vh',
		width : 'auto',
		maxWidth : inColumns ? '500px' : 'default',
		margin : inColumns ? '0 auto' : '0',
		paddingTop : inColumns ? '3vh' : '0',
	}),

	complete : inColumns => (
	{
		paddingTop : inColumns ? '18vh' : 'default',
		textAlign : 'center',
		backgroundColor : '#222',
		fontFamily : 'HelveticaNeue-UltraLight, Lato, sans-serif',
		fontSize : '26px',
		letterSpacing : '1px',
		textShadow : ' .22px .22px #eee',
		color : '#ffffff',
	}),
}

export const AttendeeChecks =()=>
{
	const [checkLog, setCheckLog] = useState(LOG_INIT)
	const [stepIndex, setStepIndex] = useState(0)
	const [complete, setComplete] = useState(false)

	const inColumns = useMediaQuery('(max-width: 900px)')

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
			return null

		const name = CHECKS[ stepIndex ].name
		const img  = CHECKS[ stepIndex ].image
		const TheCheckModule = CHECKS[ stepIndex ].module
		
		return (
			<div style={ STYLES.checkContainer( inColumns )}>
			    <div style={ STYLES.imageContainer }>
			    {
				( name === 'Video' ) ?
					<video src="video.mp4" autoPlay loop style={ STYLES.image( inColumns ) } />
				:
					<img src={ img } alt={ name } style={ STYLES.image( inColumns )} />
			    }
			    </div>

			    <TheCheckModule
				key={ name }
				title={ name }
				status={ checkLog[name] }
				inColumns={ inColumns }
				onComplete={ recordResult }
			    />
			</div>
		)
	}

	useEffect( ()=>
	{
		updateLog( 0, EStatus.TESTING )
			/* eslint-disable react-hooks/exhaustive-deps */
	}, [])

	const rerunChecks =()=> { window.location.reload() }

	const renderSteps =()=>
	{
		if ( inColumns )
		{
			if ( stepIndex < CHECKS.length )
			{
				let name = CHECKS[ stepIndex ].name

				return (
				    <div style={ STYLES.mobileStep }>
					<Step
						key={ name }
						name={ name }
						number={ stepIndex + 1 }
						status={ EStatus.TESTING }
						showLine={ EStatus.TESTING }
					/>
				    </div>
				)
			}
		}
		else
		{
			return (
			    <div style={ STYLES.steps( inColumns )}>
			    {
				CHECKS.map( ({name}, index) =>
				(
				    <div key={name+'.'+index}>
					<Step
						key={ name }
						name={ name }
						number={ index + 1 }
						showLine={ index !== CHECKS.length-1 }
						status={ checkLog[name] }
					/>
				    </div>
				))
			    }
			    </div>
			)
		}
	}

	return (
		<div style={ STYLES.outer }>

			<div style={ STYLES.header( inColumns )}>
				<div style={ STYLES.logo } />
				<button style={ STYLES.rerunChecks } onClick={rerunChecks}>Rerun Checks</button>
			</div>

			{ renderSteps() }

			<div style={ STYLES.mainContainer( inColumns )}>
				{ complete && <div style={ STYLES.complete( inColumns )}>Checks Complete!</div> }
				{ !complete && renderCheck() }
			</div>

		</div>
	)
}

export default AttendeeChecks

