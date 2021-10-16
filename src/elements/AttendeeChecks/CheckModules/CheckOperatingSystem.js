
import React from 'react'
import { getDeviceInfo } from 'library/device'

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

export const CheckOperatingSystem = ({ active, onComplete }) =>
{
	if ( !active )
		return <div></div>

	const { os } = getDeviceInfo()

	let testResult = 'OS Check'

	if ( ! os?.name )
		testResult = `Sorry, but your operating system couldn't be identified.`
	else
	{
		const { name, version, versionName } = os

		if ( version )
		{
			const recommendedVersion = SUPPORTED_OS_LIST[name]
			
			if ( recommendedVersion )
			{
				if (Number(version) < recommendedVersion)
					testResult = `Please consider upgrading to at least: ${recommendedVersion}`
			}
		}

		if ( ! testResult )
			testResult = `${name} ${version} ${versionName}`
	}

	return (
		<div style={ STYLES.outer }>
			{testResult}
		</div>
	)
}

