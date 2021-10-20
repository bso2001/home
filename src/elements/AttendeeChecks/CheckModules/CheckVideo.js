
import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../common'

export const CheckVideo = ({ status, image, title, onComplete }) =>
{
	const [started, setStarted] = useState(false)

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			setStarted( true )
	}, [status])

	const testPassed =()=> { onComplete( EStatus.PASSED, {} ) }
	const testFailed =(nv)=> { onComplete( EStatus.FAILED, { notVisible : nv } ) }

	const noButtonStyle = { ...CSTYLES.button, ...CSTYLES.noButton }
	const col3Style = { ...CSTYLES.column, justifyContent : 'space-between' } 

	return ( started &&
		<div style={ CSTYLES.outer }>

			<div style={ CSTYLES.column }>
				<video id="videoTestation" src="test.mp4" autoPlay loop style={ CSTYLES.image } />
			</div>

			<div style={ CSTYLES.column }>
				<div style={ CSTYLES.title }>{ title }</div>
				    <div style={ CSTYLES.result }>Do you see the video playing?</div>
			</div>

			<div style={ col3Style }>
				<button style={ CSTYLES.button } onClick={testPassed}>Yes, I see the video playing</button>
				<button style={ noButtonStyle } onClick={testFailed(false)}>No, I don't see the video playing</button>
				<button style={ noButtonStyle } onClick={testFailed(true)}>No, the video is blank</button>
			</div>

		</div>
	)
}

