
import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../constants'
import { getDeviceInfo } from 'library/device'

const NOT_SUPPORTED = 'NOT SUPPORTED'

export const SUPPORTED =
{
	"Amazon Silk": null,
	"Android Browser Mobile": 81,
	Bada: null,
	BlackBerry: null,
	Chrome: 69,
	"Chrome Mobile": 81,
	Chromium: null,
	Electron: null,
	Epiphany: null,
	Firefox: 74.0,
	"Firefox Mobile": 68,
	Focus: null,
	Generic: null,
	Googlebot: null,
	"Google Search": null,
	"Internet Explorer": NOT_SUPPORTED,
	"K-Meleon": null,
	Maxthon: null,
	"Microsoft Edge": 79,
	"MZ Browser": null,
	"NAVER Whale Browser": null,
	Opera: null,
	"Opera Coast": null,
	PhantomJS: null,
	Puffin: null,
	QupZilla: null,
	"QQ Browser": null,
	"QQ Browser Lite": null,
	Safari: 13,
	"Safari Mobile": 11.3,
	Sailfish: null,
	"Samsung Internet for Android": null,
	SeaMonkey: null,
	Sleipnir: null,
	Swing: null,
	Tizen: null,
	"UC Browser": null,
	Vivaldi: null,
	"WebOS Browser": null,
	WeChat: null,
	"Yandex Browser": null,
}

export const CheckBrowser = ({ status, image, title, onComplete }) =>
{
	const [result, setResult] = useState(null)

	useEffect( () =>
	{
		console.log(status.value)
		if ( status.value === EStatus.TESTING )
			runTest()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, result])

	const runTest =()=>
	{
		const { browser, platform } = getDeviceInfo()
		let outcome = 'Browser Check'

		if (!browser?.name)
			outcome = `Your browser couldn't be identified.`

		const { name, version } = browser

		if (SUPPORTED[name] === NOT_SUPPORTED)
			outcome = `Your browser is not supported.`
		else
		{
			if (version)
			{
				const recommendedVersion = SUPPORTED[ platform?.type === "mobile" ? `${name} Mobile` : name ]

				if (recommendedVersion)
				{
					if ( Number(version) < recommendedVersion )
						outcome = `Please consider upgrading to: ${recommendedVersion}`
				}
			}
		}

		setResult(outcome)
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
				<div style={ CSTYLES.result }>{ result }</div>
			</div>

			<div style={ CSTYLES.column }>
				<button style={ CSTYLES.button } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}
