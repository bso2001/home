

import React, { useEffect, useState } from 'react'

import { CSTYLES, resultCellStyle } from './styles'
import { EStatus } from '../common'
import { Passed } from './Passed'
import { Failed } from './Failed'

export const CheckLocalStorage = ({ status, image, title, isRowBased, onComplete }) =>
{
	const [passed, setPassed] = useState(null)

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			runCheck()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, passed])

	const runCheck =()=>
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

	const endCheck =()=> { onComplete(passed) }

	return ( passed !== null  &&
		<div style={ CSTYLES.outer(isRowBased) }>

			<div style={ CSTYLES.cell(isRowBased) }>
				<img src={ image } alt={ title } style={ CSTYLES.image(isRowBased) } />
			</div>

			<div style={ resultCellStyle(isRowBased) }>
				<div style={ CSTYLES.title(isRowBased) }>{ title }</div>
				{ passed === true  && <Passed /> }
				{ passed === false && <Failed /> }
			</div>
			
			<div style={ CSTYLES.cell(isRowBased) }>
				<button style={ CSTYLES.button(isRowBased) } onClick={endCheck}>Continue</button>
			</div>

		</div>
	)
}

