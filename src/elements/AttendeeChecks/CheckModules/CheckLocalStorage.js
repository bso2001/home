

import React, { useEffect, useState } from 'react'

import { CSTYLES, middleColumnStyle } from './styles'
import { EStatus } from '../common'
import { Passed } from './Passed'
import { Failed } from './Failed'

export const CheckLocalStorage = ({ status, image, title, isRowBased, onComplete }) =>
{
	const [passed, setPassed] = useState(null)

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			runTest()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, passed])

	const runTest =()=>
	{
		try
		{
			const test = 'test'
			localStorage.setItem( test, test )
			localStorage.removeItem( test )
			setPassed( true )
		}
		catch (e)
		{
			console.error('localStorage failed', e)
		}
	}

	const endTest =()=> { onComplete(passed) }

	return ( passed !== null  &&
		<div style={ CSTYLES.outer(isRowBased) }>

			<div style={ CSTYLES.column(isRowBased) }>
				<img src={ image } alt={ title } style={ CSTYLES.image(isRowBased) } />
			</div>

			<div style={ middleColumnStyle(isRowBased) }>
				<div style={ CSTYLES.title(isRowBased) }>{ title }</div>
				{ passed ? <Passed /> : <Failed  /> }
				<div style={ CSTYLES.result(isRowBased) } />
			</div>
			
			<div style={ CSTYLES.column(isRowBased) }>
				<button style={ CSTYLES.button(isRowBased) } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}

