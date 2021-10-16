
import React from 'react'

export const CheckVideo = ({ active, onComplete }) =>
{
	if ( !active )
		return <div></div>

	const video = document.createElement('video')
	const formats = [ 'video/mp4', 'video/webm', 'video/ogg' ]

	let testResult = 'Video Check'

	for (const format of formats)
	{
		const status = video.canPlayType(format)

		if ( status === '' )
			testResult = `Cannot play - ${format}`

		if ( status === 'maybe' )
			testResult = `Might play - ${format}`
	}

	return <div>{testResult}</div>
}

