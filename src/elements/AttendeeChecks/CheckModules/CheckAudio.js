
import React from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../common'

export const CheckAudio = ({ status, image, title, isRowBased, onComplete }) =>
{
	const testPassed =()=> { onComplete( EStatus.PASSED, {} ) }
	const testFailed =()=> { onComplete( EStatus.FAILED, {} ) }

	const noButtonStyle = { ...CSTYLES.button, ...CSTYLES.noButton }
	const col3Style = { ...CSTYLES.column(isRowBased), justifyContent : 'space-between' } 

	return ( 
		<div style={ CSTYLES.outer(isRowBased) }>

			<div style={ CSTYLES.column(isRowBased) }>
				<img src={ image } alt={ title } style={ CSTYLES.image(isRowBased) } />
				<audio id="audioTestation" src="test.wav" autoPlay loop />
			</div>

			<div style={ CSTYLES.column(isRowBased) }>
				<div style={ CSTYLES.title }>{ title }</div>
				    <div style={ CSTYLES.result } >Do you hear the audio playing?</div>
			</div>

			<div style={ col3Style }>
				<button style={ noButtonStyle } onClick={testFailed} >No, I don't hear the audio</button>
				<button style={ CSTYLES.button } onClick={testPassed} >Yes, I hear the audio</button>
			</div>

		</div>
	)
}

