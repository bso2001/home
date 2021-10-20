

import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../common'
import { Error } from './Error'
import { Okay } from './Okay'

export const CheckLocalStorage = ({ status, image, title, isRowBased, onComplete }) =>
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

	const col3style = { ...CSTYLES.column(isRowBased), justifyContent : isRowBased ? 'flex-end' : 'flex-start' }

	return ( message &&
		<div style={ CSTYLES.outer(isRowBased) }>

			<div style={ CSTYLES.column(isRowBased) }>
				<img src={ image } alt={ title } style={ CSTYLES.image(isRowBased) } />
			</div>

			<div style={ CSTYLES.column(isRowBased) }>
				<div style={ CSTYLES.title }>{ title }</div>
				{ passed ? <Okay msg={ message } /> : <Error msg={ message } /> }
			</div>

			<div style={ col3style }>
				<button style={ CSTYLES.button } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}

