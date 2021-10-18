
import React, { useEffect, useState } from 'react'

import { getDeviceInfo } from 'library/device'
import { CSTYLES } from './styles'
import { EStatus } from '../constants'

const SUPPORTED_OS_LIST =
{
	Android :		9,
	iOS :			11.3,
	macOS :			10.11,
	Windows :		7,
	Bada :			null,
	BlackBerry :		null,
	'Chrome OS' :		null,
	Linux :			null,
	'PlayStation 4' :	null,
	Roku :			null,
	Tizen :			null,
	WebOS :			null,
	'Windows Phone' :	null,
}

export const CheckOperatingSystem = ({ status, image, title, onComplete }) =>
{
	const [result, setResult] = useState(null)

	useEffect( () =>
	{
		if ( status.value === EStatus.PENDING || status.value === EStatus.TESTING )
			runTest()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, result])

	const runTest =()=>
	{
		const { os } = getDeviceInfo()
		let outcome = null

		if ( ! os?.name )
			outcome = `Sorry, but your operating system couldn't be identified.`
		else
		{
			const { name, version, versionName } = os

			if ( version )
			{
				const recommendedVersion = SUPPORTED_OS_LIST[name]
				
				if ( recommendedVersion )
				{
					if (Number(version) < recommendedVersion)
						outcome = `Please consider upgrading to at least: ${recommendedVersion}`
				}
			}

			if ( ! outcome )
				outcome = `${name}<br>${versionName}<br>${version}`

			setResult(outcome)
		}
	}

	const endTest =()=>
	{
		onComplete(EStatus.PASSED, {})
	}

	return ( 
		<div style={ CSTYLES.outer }>

			<div style={ CSTYLES.column }>
				<img src={ image } alt={ title } style={ CSTYLES.image } />
			</div>

			<div style={ CSTYLES.column }>
				<div style={ CSTYLES.title }>{ title }</div>
				<div style={ CSTYLES.result } dangerouslySetInnerHTML={{ __html: result }} />
			</div>

			<div style={ {...CSTYLES.column, justifyContent : 'flex-end'} }>
				<button style={ CSTYLES.button } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}

