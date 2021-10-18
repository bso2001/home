
import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../common'
import { Error } from './Error'
import { Okay } from './Okay'

export const CheckVideo = ({ status, image, title, onComplete }) =>
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
		const video = document.createElement('video')
		const formats = [ 'video/mp4', 'video/webm', 'video/ogg' ]

		let outcome = null

		for (const format of formats)
		{
			const status = video.canPlayType(format)

			if ( status === '' )
				outcome = `Cannot play - ${format}`

			if ( status === 'maybe' )
				outcome = `Might play - ${format}`
		}

		if ( !outcome )
		{
			outcome = 'Passed'
			setPassed( true )
		}

		setMessage(outcome)
	}

	const endTest =()=>
	{
		onComplete( passed, {} )
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

