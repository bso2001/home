

import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../constants'


export const CheckLocalStorage = ({ status, image, title, onComplete }) =>
{
	const [result, setResult] = useState(null)

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			runTest()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, result])

	const runTest =()=>
	{
		let outcome = null

		try
		{
			const test = 'test'
			localStorage.setItem( test, test )
			localStorage.removeItem( test )
			outcome = 'Passed'
		}
		catch (e)
		{
			outcome = 'Failed'
		}

		setResult(outcome)
	}

	const endTest =()=>
	{
		onComplete(EStatus.PASSED, {})
	}

	return ( 
		<div style={ CSTYLES.outer }>

			<div style={ CSTYLES.column }>
				<img src={ image } alt={ title } style={ CSTYLES.image } />
			</div>

			<div style={ CSTYLES.column }>
				<div style={ CSTYLES.title }>{ title }</div>
				{/*
				<div style={ CSTYLES.result } dangerouslySetInnerHTML={{ __html: result }} />
				*/}
			</div>

			<div style={ {...CSTYLES.column, justifyContent : 'flex-end'} }>
				<button style={ CSTYLES.button } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}
