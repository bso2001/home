
import React, { useEffect, useState } from 'react'

import { CSTYLES, resultCellStyle } from './styles'
import { EStatus } from '../common'
import { getDeviceInfo } from 'library/device'

export const CheckVideo = ({ status, title, inColumns, onComplete }) =>
{
	const [started, setStarted] = useState(false)
	const [retrying, setRetrying] = useState(false)
	const [message, setMessage] = useState(`Do you see the video playing?`)

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			setStarted( true )
	}, [status])

	const testPassed =()=> { onComplete( EStatus.PASSED) }

	const testFailed =()=>
	{
		if ( ! retrying ) 
		{
			setRetrying(true)
			videoHelp()
		}
		else
			onComplete( EStatus.FAILED, { notVisible : undefined } )
	}

	const videoHelp = () =>
	{
		let link, type
		const { os } = getDeviceInfo()

		switch ( os?.name )
		{
			case 'Android':
				link = 'https://www.videoconverterfactory.com/tips/videos-not-playing-on-android.html'
				type = 'Android'
				break

			case 'iOS':
				link = 'https://www.tenorshare.com/iphone-fix/how-to-fix-videos-not-playing-on-iphone-and-ipad.html'
				type = 'iPad or iPhone'
				break

			case 'macOS':
				link = 'https://macpaw.com/how-to/video-not-playing-mac'
				type = 'Mac'
				break

			case 'Windows':
				link = 'https://allthings.how/8-ways-to-fix-windows-10-not-playing-videos-on-your-computer'
				type = 'Windows'
				break

			default:
				link = 'https://www.drivereasy.com/knowledge/easy-to-fix-no-sound-on-computer'
				type = ''
		}

		setMessage (`<b><u><a href=${link}
				target="_blank">Click here</a></b></u> for information on enabling your ${type} video.` )
	}

	const noButtonStyle = { ...CSTYLES.button( inColumns ), ...CSTYLES.noButton }

	return (
		<div style={ CSTYLES.outer( inColumns ) }>
			<div style={{ ...resultCellStyle( inColumns ), minHeight : '15vh' }}>
				<div style={ CSTYLES.title( inColumns ) }>{ title }</div>
				<div style={ CSTYLES.result( inColumns ) } dangerouslySetInnerHTML={{ __html : message }} />
			</div>

			<div style={ CSTYLES.cell( inColumns ) } hidden={ !started }>

				<button style={ noButtonStyle } onClick={testFailed} >
					{ retrying ? `Still no video; skip test` : `No, I don't see the video playing` }
				</button>
				<button style={ CSTYLES.button( inColumns ) } onClick={testPassed} >
					{ retrying ? `Yes, I see the video now` : `Yes, I see the video` }
				</button>
			</div>
		</div>
	)
}
