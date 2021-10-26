

import React, { useEffect, useState } from 'react'

import { CSTYLES, resultCellStyle } from './styles'
import { EStatus } from '../common'
import { Passed } from './Passed'
import { Failed } from './Failed'
import { getDeviceInfo } from 'library/device'

export const CheckLocalStorage = ({ status, title, inColumns, onComplete }) =>
{
	const [ cookiesPassed, setCookiesPassed] = useState(null)
	const [ storagePassed, setStoragePassed] = useState(null)
	const [ message, setMessage ] = useState(null)

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			runChecks()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status])

	const cookiesHelpLink = () =>
	{
		const { browser } = getDeviceInfo()
		const base = 'https://whatismybrowser.com/guides/how-to-enable-cookies'

		switch ( browser.name )
		{
			case 'Chrome':
				return `${base}/chrome`

			case 'Safari':
				return `${base}/safari`

			case 'Firefox':
				return `${base}/firefox`

			default:
				return base
		}
	}

	const checkCookies = async() =>
	{
		return new Promise( (resolve) =>
		{
			const { cookieEnabled } = navigator
			document.cookie = 'cookietest=1'
			const isCookie = document.cookie.includes('cookietest=')
			document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';	// delete cookietest=1

			if ( !cookieEnabled || !isCookie )
				resolve(false)

			const handleReceiveMessage = (event) =>
			{
				window.removeEventListener('message', handleReceiveMessage)

				if (event.data === 'MM:3PCsupported')
					resolve(true)

				else if (event.data === 'MM:3PCunsupported')
					resolve(false)

				else
				{
					resolve(false)
					console.error( ['Internal error: Incorrect data returned'] )
				}
			}

			window.addEventListener( 'message', handleReceiveMessage )
		})
	}

	const checkStorage =()=>
	{
		try
		{
			const test = 'test'
			localStorage.setItem( test, test )
			localStorage.removeItem( test )
			setStoragePassed( true )
		}
		catch (e)
		{
			console.error('localStorage failed', e)
		}
	}

	const runChecks = async() =>
	{
		setCookiesPassed( await checkCookies() )
		checkStorage()

		let msg = ''
		if ( ! cookiesPassed )
			msg = `<b><u><a href=${cookiesHelpLink()} target="_blank">Click here</a></b></u> for information on enabling cookies in your browser.`
		setMessage( msg )
	}

	const endCheck =()=> { onComplete( cookiesPassed && storagePassed ) }

	return ( 
		<div style={ CSTYLES.outer( inColumns ) }>
			<div style={ resultCellStyle( inColumns ) }>
				<div style={ CSTYLES.title( inColumns ) }>{ title }</div>
				{ cookiesPassed===null ? null : (cookiesPassed ? <Passed msg="Cookies" /> : <Failed msg="Cookies" />) }
				{ storagePassed===null ? null : (storagePassed ? <Passed msg="Storage" /> : <Failed msg="Storage" />) }
				{ message && <div style={ CSTYLES.result( inColumns ) } dangerouslySetInnerHTML={{ __html: message }} /> }
			</div>
			
			<div style={ CSTYLES.cell( inColumns ) }>
				{ storagePassed !== null && <button style={ CSTYLES.button( inColumns ) } onClick={endCheck}>Continue</button> }
			</div>
		</div>
	)
}

