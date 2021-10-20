

import {useEffect, useState} from 'react'

import { CheckOperatingSystem } from './CheckModules/CheckOperatingSystem'
import { CheckBrowser } from './CheckModules/CheckBrowser'
import { CheckLocalStorage } from './CheckModules/CheckLocalStorage'
import { CheckChatbot } from './CheckModules/CheckChatbot'
import { CheckApi } from './CheckModules/CheckApi'
import { CheckVideo } from './CheckModules/CheckVideo'
import { CheckAudio } from './CheckModules/CheckAudio'

/*
	CheckCookies,
	CheckCss,
	CheckEngine,
	CheckGlisser,
	CheckPlatform,
*/

export const EStatus = Object.freeze(
{
	PENDING : 'PENDING',
	TESTING : 'TESTING',
	PASSED  : 'PASSED',
	FAILED  : 'FAILED',
})

export const CHECKS =
[
	[ 'Operating System', CheckOperatingSystem, 'os.jpg' ],
	[ 'Browser', CheckBrowser, 'browser.jpg' ],
	[ 'Local Storage', CheckLocalStorage, 'storage.jpg' ],
	[ 'Network', CheckApi, 'network.jpg' ],
	[ 'Chatbot', CheckChatbot, 'chatbot.png' ],
	[ 'Audio', CheckAudio, 'audio.jpg' ],
	[ 'Video', CheckVideo, 'video.jpg' ],

	/*
	[ 'Cookies', CheckCookies, '' ],
	[ 'CSS', CheckCss, '' ],
	[ 'Engine', CheckEngine, '' ],
	[ 'Glisser', CheckGlisser, '' ],
	[ 'Platform', CheckPlatform, '' ],
	[ 'Popup Blockers', CheckPopupBlockers, '' ],
	*/
].map(([name, module, image]) => ({ name, module, image }))

export const LOG_INIT = CHECKS.reduce( (log, { name }) =>
{
	log[name] =
	{
		value: EStatus.PENDING,
		info : [],
	}

	return log
}, {})

export const NOT_SUPPORTED = 'NOT SUPPORTED'

export const SUPPORTED_BROWSERS =
{
	"Amazon Silk": null,
	"Android Browser Mobile": 81,
	Bada: null,
	BlackBerry: null,
	Chrome: 38376,
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

export const SUPPORTED_OS_LIST =
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

export const getPosition = (string, subString, offset) =>
{
	return string.split(subString, offset).join(subString).length
}

export const vSimplify = ( version ) =>
{
	if ( (version.split('.').length - 1) > 1 )	// take only one decimal place...
		version = version.substr(0, getPosition(version, '.', 2))

	return version
}

//
// See: medium.com/@ttennant/react-inline-styles-and-media-queries-using-a-custom-react-hook-e76fa9ec89f6
//

export const useMediaQuery = (query) =>
{
	const mediaMatch = window.matchMedia(query)
	const [matches, setMatches] = useState(mediaMatch.matches)

	useEffect(() =>
	{
		const handler = e => setMatches(e.matches)
		mediaMatch.addListener(handler)
		return () => mediaMatch.removeListener(handler)
	})

	return matches
}

