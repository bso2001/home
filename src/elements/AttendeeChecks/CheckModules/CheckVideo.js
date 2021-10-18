

import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../constants'

export const CheckVideo = ({ status, image, title, onComplete }) =>
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
		const video = document.createElement('video')
		const formats = [ 'video/mp4', 'video/webm', 'video/ogg' ]

		let outcome = ''

		for (const format of formats)
		{
			const status = video.canPlayType(format)

			if ( status === '' )
				outcome = `Cannot play - ${format}`

			if ( status === 'maybe' )
				outcome = `Might play - ${format}`
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

			<div style={ CSTYLES.column }>
				<button style={ CSTYLES.button } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}

