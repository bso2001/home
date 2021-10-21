
import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../common'

export const CheckVideo = ({ status, image, title, isRowBased, onComplete }) =>
{
	const [started, setStarted] = useState(false)

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			setStarted( true )
	}, [status])

	const testPassed =()=> { onComplete( EStatus.PASSED) }
	const testFailed =()=> { onComplete( EStatus.FAILED, { notVisible : false } ) }
	const testFailedThumbnail =()=> { onComplete( EStatus.FAILED, { notVisible : true } ) }

	const noButtonStyle = { ...CSTYLES.button(isRowBased), ...CSTYLES.noButton }
	const col3Style = { ...CSTYLES.column(isRowBased), justifyContent : 'space-between' } 

	return ( started &&
		<div style={ CSTYLES.outer(isRowBased) }>

			<div style={ CSTYLES.column(isRowBased) }>
				<video id="videoTestation" src="test.mp4" autoPlay loop style={ CSTYLES.image(isRowBased) } />
			</div>

			<div style={ CSTYLES.column(isRowBased) }>
				<div style={ CSTYLES.title(isRowBased) }>{ title }</div>
				    <div style={ CSTYLES.result(isRowBased) }>Do you see the video playing?</div>
			</div>

			<div style={ col3Style } hidden={ !started }>
				<button style={ noButtonStyle } onClick={testFailed}>No, I don't see the video playing</button>
				<button style={ noButtonStyle } onClick={testFailedThumbnail}>No, the video is blank</button>
				<button style={ CSTYLES.button(isRowBased) } onClick={testPassed}>Yes, I see the video playing</button>
			</div>

		</div>
	)
}

