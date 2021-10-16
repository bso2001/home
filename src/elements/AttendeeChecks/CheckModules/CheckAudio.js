
import React from 'react'

export const CheckAudio = ({ active, onComplete }) =>
{
	if ( !active )
		return <div></div>

	let testResult = 'Audio Check'

	return <div>{testResult}</div>
}
