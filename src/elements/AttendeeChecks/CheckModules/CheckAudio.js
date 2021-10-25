
import React from 'react'

import { CSTYLES, resultCellStyle } from './styles'
import { EStatus } from '../common'

export const CheckAudio = ({ status, title, inColumns, onComplete }) =>
{
	const testPassed =()=> { onComplete( EStatus.PASSED, {} ) }
	const testFailed =()=> { onComplete( EStatus.FAILED, {} ) }

	const noButtonStyle = { ...CSTYLES.button( inColumns ), ...CSTYLES.noButton }

	return ( 
		<div style={ CSTYLES.outer( inColumns ) }>
			<div style={{ ...resultCellStyle( inColumns ), minHeight : '20vh' }}>
				<audio id="audioTestation" src="test.wav" autoPlay loop />
				<div style={ CSTYLES.title( inColumns ) }>{ title }</div>
				    <div style={ CSTYLES.result( inColumns ) } >Do you hear the audio playing?</div>
			</div>

			<div style={ CSTYLES.cell( inColumns ) }>
				<button style={ noButtonStyle } onClick={testFailed} >No, I don't hear the audio</button>
				<button style={ CSTYLES.button( inColumns ) } onClick={testPassed} >Yes, I hear the audio</button>
			</div>
		</div>
	)
}

