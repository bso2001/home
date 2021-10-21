
import React, { useEffect, useState } from 'react'

import { CSTYLES, middleColumnStyle } from './styles'
import { EStatus, NOT_SUPPORTED, SUPPORTED_BROWSERS, vSimplify } from '../common'
import { Passed } from './Passed'
import { Failed } from './Failed'
import { getDeviceInfo } from 'library/device'

export const CheckBrowser = ({ status, image, title, isRowBased, onComplete }) =>
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
		const { browser, platform } = getDeviceInfo()
		let outcome = null

		if ( ! browser?.name )
			outcome = `Your browser couldn't be identified.`

		const { name, version } = browser

		if (SUPPORTED_BROWSERS[name] === NOT_SUPPORTED)
			outcome = `Your browser is not supported.`
		else
		{
			if ( version )
			{
				const recommendedVersion = SUPPORTED_BROWSERS[ platform?.type === "mobile" ? `${name} Mobile` : name ]

				if ( recommendedVersion )
				{
					if ( Number( vSimplify(version) ) < recommendedVersion )
						outcome = `Please upgrade your version to at least ${name} ${recommendedVersion}`
				}
			}
		}

		if ( ! outcome )
		{
			setPassed( true )
			outcome = `You are running<br/>${name} ${version} (${platform.type})`
		}

		setMessage(outcome)
	}

	const endTest =()=> { onComplete(EStatus.PASSED) }

	return ( message &&
		<div style={ CSTYLES.outer(isRowBased) }>

			<div style={ CSTYLES.column(isRowBased) }>
				<img src={ image } alt={ title } style={ CSTYLES.image(isRowBased) } />
			</div>

			<div style={ middleColumnStyle(isRowBased) }>
				<div style={ CSTYLES.title(isRowBased) }>{ title }</div>
				{ passed ? <Passed /> : <Failed  /> }
				{ message && <div style={ CSTYLES.result(isRowBased) } dangerouslySetInnerHTML={{ __html: message }} /> }
			</div>

			<div style={ CSTYLES.column(isRowBased) }>
				<button style={ CSTYLES.button(isRowBased) } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}
