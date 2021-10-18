
import React, { useEffect, useState } from 'react'

import { getDeviceInfo } from 'library/device'
import { Error } from './Error'
import { Okay } from './Okay'
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
	const [passed, setPassed] = useState(false)
	const [message, setMessage] = useState(null)

	useEffect( () =>
	{
		if ( status.value === EStatus.PENDING || status.value === EStatus.TESTING )
			runTest()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, message])

	const runTest =()=>
	{
		const { os } = getDeviceInfo()
		let outcome = null

		if ( ! os?.name )
			outcome = `Sorry, but your operating system couldn't be identified.`
		else
		{
			const { name, version, versionName } = os

			if ( name )
			{
				const recommendedVersion = SUPPORTED_OS_LIST[name]
				
				if ( ! recommendedVersion )
					outcome = `Sorry, but your operating system is not supported.`

				else if ( version )
				{
					if ( Number(version) < recommendedVersion )
						outcome = `Please upgrade your version to at least: ${recommendedVersion}`
				}
			}

			if ( ! outcome )
			{
				setPassed( true )
				outcome = `You are running<br/>${name} ${version} (${versionName})`
			}
		}

		setMessage( outcome )
	}

	const endTest =()=>
	{
		onComplete(EStatus.PASSED, {})
	}

	return ( message &&
		<div style={ CSTYLES.outer }>

			<div style={ CSTYLES.column }>
				<img src={ image } alt={ title } style={ CSTYLES.image } />
			</div>

			<div style={ CSTYLES.column }>
				<div style={ CSTYLES.title }>{ title }</div>
				{ passed ? <Okay msg={ message } /> : <Error msg={ message } /> }
			</div>

			<div style={ {...CSTYLES.column, justifyContent : 'flex-end'} }>
				<button style={ CSTYLES.button } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}

