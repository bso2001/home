
import React, { useState } from 'react'

import { CSTYLES, resultCellStyle } from './styles'
import { EStatus } from '../common'
import { getDeviceInfo } from 'library/device'

export const CheckAudio = ({ status, title, inColumns, onComplete }) =>
{
	const [retrying, setRetrying] = useState(false)
	const [message, setMessage] = useState( `Do you hear the audio playing?` )

	const testPassed =()=>
	{
		onComplete( EStatus.PASSED, {} )
	}

	const testFailed =()=>
	{
		if ( ! retrying ) 
		{
			setRetrying(true)
			audioHelp()
		}
		else
			onComplete( EStatus.FAILED, {} )
	}

	const audioHelp = () =>
	{
		let link, type
		const { os } = getDeviceInfo()

		switch ( os?.name )
		{
			case 'Android':
				link = 'https://www.techsolutions.support.com/how-to/fix-call-or-audio-quality-android-phone-or-tablet-10740'
				type = 'Android'
				break

			case 'iOS':
				link = 'https://www.lifewire.com/fix-volume-on-iphone-4174470'
				type = 'iPad or iPhone'
				break

			case 'macOS':
				link = 'https://macpaw.com/how-to/fix-sound-on-mac'
				type = 'Mac'
				break

			case 'Windows':
				link = 'https://www.pcworld.com/article/491036/how-to-troubleshoot-audio-problems-with-your-pc.html'
				type = 'Windows'
				break

			default:
				link = 'https://www.drivereasy.com/knowledge/easy-to-fix-no-sound-on-computer'
				type = ''
		}

		setMessage (`<b><u><a href=${link}
				target="_blank">Click here</a></b></u> for information on enabling your ${type} audio.` )
	}

	const noButtonStyle = { ...CSTYLES.button( inColumns ), ...CSTYLES.noButton }

	return ( 
		<div style={ CSTYLES.outer( inColumns ) }>
			<div style={{ ...resultCellStyle( inColumns ), minHeight : '20vh' }}>
				<audio id="audioTestation" src="test.wav" autoPlay loop />
				<div style={ CSTYLES.title( inColumns ) }>{ title }</div>
				<div style={ CSTYLES.result( inColumns ) } dangerouslySetInnerHTML={{ __html : message }} />
			</div>

			<div style={ CSTYLES.cell( inColumns ) }>
				<button style={ noButtonStyle } onClick={testFailed} >
					{ retrying ? `Still no audio; skip test` : `No, I don't hear the audio` }
				</button>
				<button style={ CSTYLES.button( inColumns ) } onClick={testPassed} >
					{ retrying ? `Yes, I hear the audio now` : `Yes, I hear the audio` }
				</button>
			</div>
		</div>
	)
}

