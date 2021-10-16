
import React from 'react'
import { Step } from './Step'
import { CHECKS } from './constants'

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
	const [stepIndex, setStepIndex] = React.useState(0)

	const nextStep = () =>
	{
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
						active={index === stepIndex}
						name={name}
						number={index + 1}
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
						active={index === stepIndex}
						onComplete={nextStep}
					/>
				))
			}
			</div>

		</div>
	)
}

export default AttendeeChecks

