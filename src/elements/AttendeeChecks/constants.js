
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

