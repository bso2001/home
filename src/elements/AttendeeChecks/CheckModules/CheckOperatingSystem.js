
import React, { useEffect, useState } from 'react'
import { getDeviceInfo } from 'library/device'
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

const STYLES =
{
	outer : 
	{
		display : 'flex',
	}
}

export const CheckOperatingSystem = ({ status, onComplete }) =>
{
	const [result, setResult] = useState(null)

	useEffect( () =>
	{
		console.log('OS', status.value)
		if ( status.value === EStatus.PENDING || status.value === EStatus.TESTING )
			runTest()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, result])

	const runTest =()=>
	{
		const { os } = getDeviceInfo()
		let outcome = ''

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
				outcome = `${name} ${version} ${versionName}`

	console.log(outcome)
			setResult(outcome)
		}
	}

	const endTest =()=>
	{
		onComplete(EStatus.PASSED, {})
	}

	return ( 
		<div style={ STYLES.outer }>
			{result}
			<button onClick={endTest}>Continue</button>
		</div>
	)
}

