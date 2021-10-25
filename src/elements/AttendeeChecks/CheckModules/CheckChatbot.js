
import React, { useEffect, useState } from 'react'

import { CSTYLES, resultCellStyle } from './styles'
import { EStatus, APP_TAWK_TO_ID, MAX_CHECK_RUN_TIME } from '../common'
import { Passed } from './Passed'
import { Failed } from './Failed'

// import { APP_TAWK_TO_ID } from '~/exports.json'

// import { useSelector } from 'react-redux'
// import { selectClientConfig } from 'store/selectors'

export const CheckChatbot = ({ status, title, inColumns, onComplete }) =>
{
	const [passed, setPassed] = useState(null)
	const [message, setMessage] = useState('Checking Chatbot...')

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			runCheck()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, message])

	const checkTawkTo =()=>
	{
		return new Promise( (resolve) =>
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
						resolve(EStatus.PASSED)
					else
						timeout = setTimeout( waitForApi, DELAY )

					if ( count > Math.floor(MAX_CHECK_RUN_TIME / DELAY) )
					{
						clearTimeout(timeout)
						resolve(null)
					}

					count++
				}
				waitForApi()
			}

			script.onerror = () => resolve(EStatus.FAILED)

			script.setAttribute('async', true)
			script.setAttribute('charset', 'UTF-8')
			script.setAttribute('crossorigin', '*')
			script.setAttribute('src', `https://embed.tawk.to/${APP_TAWK_TO_ID}/default`)

			locationScript.parentNode.insertBefore(script, locationScript)
		})
	}

	const runCheck = async() =>
	{
						// const clientConfig = useSelector( selectClientConfig )
						// if (clientConfig?.chatbot === 'tawkTo')
		let message = ''
		const result = await checkTawkTo()

		if ( result === EStatus.PASSED )
			setPassed( true )

		else if ( result === null )
		{
			message = 'Timed out waiting for chatbot.'
			setPassed( false )
		}

		else
		{
			message = result
			setPassed( false )
		}

		setMessage( message )
	}

	const endCheck =()=> { onComplete( passed ) }

	return ( 
		<div style={ CSTYLES.outer( inColumns ) }>
			<div style={ resultCellStyle( inColumns ) }>
				{ passed !== null && <div style={ CSTYLES.title( inColumns ) }>{ title }</div> }
				{ passed === true  && <Passed /> }
				{ passed === false && <Failed /> }
				{ message && <div style={ CSTYLES.result( inColumns ) } dangerouslySetInnerHTML={{ __html: message }} /> }
			</div>

			<div style={ CSTYLES.cell( inColumns ) }>
				{ passed !== null && <button style={ CSTYLES.button( inColumns ) } onClick={endCheck}>Continue</button> }
			</div>
		</div>
	)
}

