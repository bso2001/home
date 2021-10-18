

import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../constants'
import { Error } from './Error'
import { Okay } from './Okay'

export const CheckLocalStorage = ({ status, image, title, onComplete }) =>
{
	const [passed, setPassed] = useState(false)
	const [message, setMessage] = useState(null)

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			runTest()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, message])

	const runTest =()=>
	{
		let outcome = null

		try
		{
			const test = 'test'
			localStorage.setItem( test, test )
			localStorage.removeItem( test )
			outcome = 'Passed'
			setPassed( true )
		}
		catch (e)
		{
			outcome = 'Failed'
		}

		setMessage( outcome )
	}

	const endTest =()=>
	{
		onComplete(passed, {})
	}

	return ( message &&
		<div style={ CSTYLES.outer }>

			<div style={ CSTYLES.column }>
				<img src={ image } alt={ title } style={ CSTYLES.image } />
			</div>

			<div style={ CSTYLES.column }>
				<div style={ CSTYLES.title }>{ title }</div>
				{ passed ? <Okay msg={ message } /> : <Error msg={ message } /> }
			</div>

			<div style={ {...CSTYLES.column, justifyContent : 'flex-end'} }>
				<button style={ CSTYLES.button } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}

