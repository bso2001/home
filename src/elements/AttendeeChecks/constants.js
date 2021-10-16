
import { CheckOperatingSystem } from './CheckModules/CheckOperatingSystem'
import { CheckBrowser } from './CheckModules/CheckBrowser'
import { CheckLocalStorage } from './CheckModules/CheckLocalStorage'
import { CheckChatbot } from './CheckModules/CheckChatbot'
import { CheckApi } from './CheckModules/CheckApi'
import { CheckVideo } from './CheckModules/CheckVideo'
import { CheckAudio } from './CheckModules/CheckAudio'

/*
import
{
	CheckCookies,
	CheckCss,
	CheckEngine,
	CheckGlisser,
	CheckPlatform,
} from './CheckModules'
*/

/**
* @return {Object}
*/

export const EStatus = Object.freeze(
{
	PENDING : 'PENDING',
	TESTING : 'TESTING',
	PASSED  : 'PASSED',
	FAILED  : 'FAILED',
})

/**
* @return {Array}
*/

export const CHECKS =
[
	[ 'Operating System', CheckOperatingSystem ],
	[ 'Browser', CheckBrowser ],
	[ 'Local Storage', CheckLocalStorage ],
	[ 'Network', CheckApi ],
	[ 'Chatbot', CheckChatbot ],
	[ 'Video', CheckVideo ],
	[ 'Audio', CheckAudio ],

	/*
	[ 'Cookies', CheckCookies ],
	[ 'CSS', CheckCss ],
	[ 'Engine', CheckEngine ],
	[ 'Glisser', CheckGlisser ],
	[ 'Platform', CheckPlatform ],
	[ 'Popup Blockers', CheckPopupBlockers ],
	*/
].map(([name, TheCheckModule]) => ({ name, TheCheckModule }))
