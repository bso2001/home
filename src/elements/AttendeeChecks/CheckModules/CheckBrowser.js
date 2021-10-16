
import React from 'react'
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

const STYLES =
{
	outer : 
	{
		display : 'flex',
	}
}

export const CheckBrowser = ({ active, onComplete }) =>
{
	if ( !active )
		return <div></div>

	const { browser, platform } = getDeviceInfo()

	let testResult = 'Browser Check'

	if (!browser?.name)
		testResult = `Your browser couldn't be identified.`

	const { name, version } = browser

	if (SUPPORTED[name] === NOT_SUPPORTED)
		testResult = `Your browser is not supported.`
	else
	{
		if (version)
		{
			const recommendedVersion = SUPPORTED[ platform?.type === "mobile" ? `${name} Mobile` : name ]

			if (recommendedVersion)
			{
				if ( Number(version) < recommendedVersion )
					testResult = `Please consider upgrading to: ${recommendedVersion}`
			}
		}
	}

	return (
		<div style={ STYLES.outer }>
			{testResult}
		</div>
	)
}
