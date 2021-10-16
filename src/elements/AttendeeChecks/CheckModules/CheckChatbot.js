
import React from 'react'

// import { APP_TAWK_TO_ID } from '~/exports.json'
// import { PASS, FAIL, MAX_TEST_TIME } from '../helpers-and-data'
// import { useSelector } from 'react-redux'
// import { selectClientConfig } from 'store/selectors'

export const CheckChatbot = ({ active, onComplete }) =>
{
	if ( !active )
		return <div></div>
/*
	const clientConfig = useSelector( selectClientConfig )

	switch (clientConfig?.chatbot)
	{
		case 'tawkTo':
		{
			return new Promise((resolve) =>
			{
				document.getElementsByTagName('head')[0].appendChild( document.createElement('script') )	 // to ensure there is at least one script available

				const script = document.createElement('script')
				const locationScript = document.getElementsByTagName('script')[0]

				script.onload = () =>
				{
					let timeout = null
					let count = 0
					const DELAY = 1000
					
					const waitForApi = () =>
					{
						if ( window.Tawk_API && window.Tawk_API.onBeforeLoaded )
							resolve(PASS)
						else
							timeout = setTimeout( waitForApi, DELAY )

						if ( count > Math.floor(MAX_TEST_TIME / DELAY) )
						{
							clearTimeout(timeout)
							resolve(FAIL)
						}

						count++
					}

					waitForApi()
				}

				script.onerror = () => resolve(FAIL)

				script.setAttribute('async', true)
				script.setAttribute('charset', 'UTF-8')
				script.setAttribute('crossorigin', '*')
				script.setAttribute('src', `https://embed.tawk.to/${APP_TAWK_TO_ID}/default`)

				locationScript.parentNode.insertBefore(script, locationScript)
			})
		}

		default:
			return Promise.resolve()
	}
*/
	return <div>Chatbot Check</div>
}

