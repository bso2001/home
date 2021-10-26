
import {useEffect, useState} from 'react'

import { CheckOperatingSystem } from './CheckModules/CheckOperatingSystem'
import { CheckBrowser } from './CheckModules/CheckBrowser'
import { CheckLocalStorage } from './CheckModules/CheckLocalStorage'
import { CheckChatbot } from './CheckModules/CheckChatbot'
import { CheckNetwork } from './CheckModules/CheckNetwork'
import { CheckVideo } from './CheckModules/CheckVideo'
import { CheckAudio } from './CheckModules/CheckAudio'

import allCssPropertiesWithValues from './all-css-properties-with-values.json'

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
	[ 'OS Version', CheckOperatingSystem, 'os.jpg' ],	// @todo -- this must go 1st until i fix some init bug...
	[ 'Audio', CheckAudio, 'audio.jpg' ],
	[ 'Local Storage', CheckLocalStorage, 'storage.jpg' ],
	[ 'Browser', CheckBrowser, 'browser.jpg' ],
	[ 'Chatbot', CheckChatbot, 'chatbot.png' ],
	[ 'Network', CheckNetwork, 'network.jpg' ],
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
	'Amazon Silk': null,
	'Android Browser Mobile': 81,
	Bada: null,
	BlackBerry: null,
	Chrome: 69,
	'Chrome Mobile': 81,
	Chromium: null,
	Electron: null,
	Epiphany: null,
	Firefox: 74.0,
	'Firefox Mobile': 68,
	Focus: null,
	Generic: null,
	Googlebot: null,
	'Google Search': null,
	'Internet Explorer': NOT_SUPPORTED,
	'K-Meleon': null,
	Maxthon: null,
	'Microsoft Edge': 79,
	'MZ Browser': null,
	'NAVER Whale Browser': null,
	Opera: null,
	'Opera Coast': null,
	PhantomJS: null,
	Puffin: null,
	QupZilla: null,
	'QQ Browser': null,
	'QQ Browser Lite': null,
	Safari: 13,
	'Safari Mobile': 11.3,
	Sailfish: null,
	'Samsung Internet for Android': null,
	SeaMonkey: null,
	Sleipnir: null,
	Swing: null,
	Tizen: null,
	'UC Browser': null,
	Vivaldi: null,
	'WebOS Browser': null,
	WeChat: null,
	'Yandex Browser': null,
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

// The following CSS properties and values are transformed in testing:
//	box-shadow: 1px 1px 1px 1px black; → box-shadow: black 1px 1px 1px 1px;
//	text-shadow: 1px 1px 1px 1px black; → text-shadow: black 1px 1px 1px 1px;
//	flex: auto; → flex: 1 1 auto;
//	flex: none; → flex: 0 0 auto;
//	filter: drop-shadow(16px 16px 20px blue); → filter: drop-shadow(blue 16px 16px 20px);
//	transform-origin: right bottom 2px; → transform-origin: bottom right 2px;
//	transform-origin: 2px; → transform-origin: 2px center;

export const combinePropertyAndValue =( property, value )=> { return `${property} - ${value}` }

export const CSS_VALUES_WHITELIST =
[
	["display", "flex"],
	["display", "run-in"],
	["animation-timing-function", "step-start"],
	["animation-timing-function", "step-end"],
	["word-break", "keep-all"],
	["transition-timing-function", "step-start"],
	["transition-timing-function", "step-end"],
	["outline-color", "invert"],
	["list-style", "georgian"],
	["list-style", "outside"],
	["list-style", 'url("foo.png")'],
	["grid", "auto-flow / 1fr 1fr 1fr"],
	["grid", "40px 4em 40px auto-flow / 60px 60px"],
	["grid-auto-flow", "row dense"],
	["content", "example-counter 0"],
	["cursor", 'url("foo.png")'],
	["font", "caption"],
	["font", "icon"],
	["font", "menu"],
	["font", "message-box"],
	["font", "small-caption"],
	["font", "status-bar"],
	["grid", "none"],
	["grid", '"a a a" "b c c" "b c c"'],
	["grid", "40px 4em 40px / 60px 60px"],
	["grid", "60px 60px / 40px 4em 40px"],
	["grid", "40px 4em 40px / auto-flow 60px 60px"],
	["grid-area", "foo"],
	["grid-column", "1"],
	["grid-column-gap", "100px"],
	["grid-gap", "1ch"],
	["grid-gap", "1em"],
	["grid-row-gap", "100px"],
	["grid-template", "none"],
	["list-style-type", "upper-greek"],
	["outline", "thick double black"],
	["text-overflow", '"-"'],
	["transform-origin", "2px"],
	["transform-origin", "center bottom"],
	["all", "initial"],
	["all", "inherit"],
	["all", "unset"],
	["quotes", '"«" "»" "‹" "›"'],
	["text-decoration", "underline overline rgb(255, 48, 40)"],
	["list-style-image", 'url("foo.png")'],
	["font-variant", "normal"],
	["font-variant", "small-caps"],
	["font-variant", "initial"],
	["font-variant", "inherit"],
	["content", "prefix"],
	["content", 'url("foo.png")'],
	["background-image", 'url("foo.png")'],
	["border-image", "initial"],
	["border-image", "inherit"],
	["border-image-source", 'url("foo.png")'],
	["content", '"prefix"'],
].map( ([property, value]) => combinePropertyAndValue(property, value))

export const CSS_PROPERTIES_WHITELIST =
[
	'tab-size',
	'hanging-punctuation',
	'box-decoration-break',
	'font-size-adjust',
	'text-justify',
	'user-select',
	'scroll-behavior',
	'text-align-last',
	'hyphens',
	'backface-visibility',
]

export const propertiesInfo = allCssPropertiesWithValues
export const APP_TAWK_TO_ID = '5f650792f0e7167d0011b051'
export const MAX_CHECK_RUN_TIME = 15

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

export const useMediaQuery =( query )=>
{
	const mediaMatch = window.matchMedia(query)
	const [matches, setMatches] = useState(mediaMatch.matches)

	useEffect( () =>
	{
		const handler = e => setMatches(e.matches)
		mediaMatch.addListener(handler)
		return () => mediaMatch.removeListener(handler)
	})

	return matches
}

