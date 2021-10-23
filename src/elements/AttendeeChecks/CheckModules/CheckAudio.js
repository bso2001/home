
import React from 'react'

import { CSTYLES, resultCellStyle } from './styles'
import { EStatus } from '../common'

export const CheckAudio = ({ status, image, title, isRowBased, onComplete }) =>
{
	const testPassed =()=> { onComplete( EStatus.PASSED, {} ) }
	const testFailed =()=> { onComplete( EStatus.FAILED, {} ) }

	const noButtonStyle = { ...CSTYLES.button(isRowBased), ...CSTYLES.noButton }

	return ( 
		<div style={ CSTYLES.outer(isRowBased) }>

			<div style={ CSTYLES.cell(isRowBased) }>
				<img src={ image } alt={ title } style={ CSTYLES.image(isRowBased) } />
				<audio id="audioTestation" src="test.wav" autoPlay loop />
			</div>

			<div style={ resultCellStyle(isRowBased) }>
				<div style={ CSTYLES.title(isRowBased) }>{ title }</div>
				    <div style={ CSTYLES.result(isRowBased) } >Do you hear the audio playing?</div>
			</div>

			<div style={ CSTYLES.cell(isRowBased) }>
				<button style={ noButtonStyle } onClick={testFailed} >No, I don't hear the audio</button>
				<button style={ CSTYLES.button(isRowBased) } onClick={testPassed} >Yes, I hear the audio</button>
			</div>

		</div>
	)
}

