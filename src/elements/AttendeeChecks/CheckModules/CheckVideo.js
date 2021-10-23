
import React, { useEffect, useState } from 'react'

import { CSTYLES, resultCellStyle } from './styles'
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

	return ( started &&
		<div style={ CSTYLES.outer(isRowBased) }>

			<div style={ CSTYLES.cell(isRowBased) }>
				<video id="videoTestation" src="test.mp4" autoPlay loop style={ CSTYLES.image(isRowBased) } />
			</div>

			<div style={ resultCellStyle(isRowBased) }>
				<div style={ CSTYLES.title(isRowBased) }>{ title }</div>
				    <div style={ CSTYLES.result(isRowBased) }>Is the video playing?</div>
			</div>

			<div style={ CSTYLES.cell(isRowBased) } hidden={ !started }>
				<button style={ noButtonStyle } onClick={testFailed}>No, I don't see the video playing</button>
				<button style={ noButtonStyle } onClick={testFailedThumbnail}>No, the video is blank</button>
				<button style={ CSTYLES.button(isRowBased) } onClick={testPassed}>Yes, I see the video playing</button>
			</div>

		</div>
	)
}

