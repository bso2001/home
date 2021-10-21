
import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../common'
import { Passed } from './Passed'
import { Failed } from './Failed'

// import { APP_TAWK_TO_ID } from '~/exports.json'
// import { PASS, FAIL, MAX_TEST_TIME } from '../helpers-and-data'
// import { useSelector } from 'react-redux'
// import { selectClientConfig } from 'store/selectors'

export const CheckChatbot = ({ status, image, title, isRowBased, onComplete }) =>
{
	const [passed, setPassed] = useState(false)
	const [message, setMessage] = useState(null)

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			runTest()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, message])

	const runTest =()=>
	{
/*
		const clientConfig = useSelector( selectClientConfig )

		switch (clientConfig?.chatbot)
		{
			case 'tawkTo':
			{
				return new Promise((resolve) =>
				{
								// ensure there is at least one script available
					document.getElementsByTagName('head')[0].appendChild( document.createElement('script') )

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
		setMessage('Under Construction')
	}

	const endTest =()=>
	{
		onComplete( passed )
	}

	const col3style = { ...CSTYLES.column(isRowBased), justifyContent : isRowBased ? 'flex-end' : 'flex-start' }

	return ( message &&
		<div style={ CSTYLES.outer(isRowBased) }>

			<div style={ CSTYLES.column(isRowBased) }>
				<img src={ image } alt={ title } style={ CSTYLES.image(isRowBased) } />
			</div>

			<div style={ CSTYLES.column(isRowBased) }>
				<div style={ CSTYLES.title(isRowBased) }>{ title }</div>
				{ passed ? <Passed /> : <Failed  /> }
				{ message && <div style={ CSTYLES.result(isRowBased) } dangerouslySetInnerHTML={{ __html: message }} /> }
			</div>

			<div style={ col3style }>
				<button style={ CSTYLES.button(isRowBased) } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}

