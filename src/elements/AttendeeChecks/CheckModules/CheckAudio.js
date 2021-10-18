
import React, { useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../common'

export const CheckAudio = ({ status, image, title, onComplete }) =>
{
	const [started, setStarted] = useState(false)

	const testPassed =()=> { onComplete( EStatus.PASSED, {} ) }
	const testFailed =()=> { onComplete( EStatus.FAILED, {} ) }

	const noButtonStyle = { ...CSTYLES.button, ...CSTYLES.noButton }
	const col3Style = { ...CSTYLES.column, justifyContent : 'space-between' } 

	const startAudio =()=>
	{
		document.getElementById('audioTestation').play()
		setStarted(true)
	}

	return ( 
		<div style={ CSTYLES.outer }>

			<div style={ CSTYLES.column }>
				<img src={ image } alt={ title } style={ CSTYLES.image } />
				<audio id="audioTestation" src="test.wav" autoplay loop />
			</div>

			<div style={ CSTYLES.column }>
				<div style={ CSTYLES.title }>{ title }</div>
				    <div style={ CSTYLES.result } hidden={ started }>
					<button style={ CSTYLES.button } onClick={startAudio}>Click to play audio</button>
				    </div>
				    <div style={ CSTYLES.result } hidden={ ! started }>Do you hear the audio playing?</div>
			</div>

			<div style={ col3Style }>
				<button style={ CSTYLES.button } onClick={testPassed} hidden={ !started }>Yes, I hear the audio</button>
				<button style={ noButtonStyle } onClick={testFailed} hidden={ !started }>No, I don't hear the audio</button>
			</div>

		</div>
	)
}
