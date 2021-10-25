
import React, { useEffect, useState } from 'react'

import { CSTYLES, resultCellStyle } from './styles'
import { EStatus } from '../common'

export const CheckVideo = ({ status, title, inColumns, onComplete }) =>
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

	const noButtonStyle = { ...CSTYLES.button( inColumns ), ...CSTYLES.noButton }

	return ( started &&
		<div style={ CSTYLES.outer( inColumns ) }>
			<div style={{ ...resultCellStyle( inColumns ), minHeight : '15vh' }}>
				<div style={ CSTYLES.title( inColumns ) }>{ title }</div>
				<div style={ CSTYLES.result( inColumns ) }>Is the video playing?</div>
			</div>

			<div style={ CSTYLES.cell( inColumns ) } hidden={ !started }>
				<button style={ noButtonStyle } onClick={testFailed}>No, I don't see the video playing</button>
				<button style={ noButtonStyle } onClick={testFailedThumbnail}>No, the video is blank</button>
				<button style={ CSTYLES.button( inColumns ) } onClick={testPassed}>Yes, I see the video playing</button>
			</div>
		</div>
	)
}

