
import React, { useEffect, useState } from 'react'

import { getDeviceInfo } from 'library/device'
import { Passed } from './Passed'
import { Failed } from './Failed'
import { CSTYLES, resultCellStyle } from './styles'
import { EStatus, SUPPORTED_OS_LIST, vSimplify } from '../common'

export const CheckOperatingSystem = ({ status, title, inColumns, onComplete }) =>
{
	const [passed, setPassed] = useState(false)
	const [message, setMessage] = useState(null)

	useEffect( () =>
	{
			// something is not initialized properly for the 1st step //
				// this is a hackaround for now .... //

		if ( status.value === EStatus.PENDING || status.value === EStatus.TESTING )
			runCheck()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, message])

	const runCheck =()=>
	{
		const { os } = getDeviceInfo()
		let outcome = null

		if ( ! os?.name )
			outcome = `Sorry, but your operating system couldn't be identified.`
		else
		{
			let { name, version /*,versionName*/ } = os

			if ( name )
			{
				const recommendedVersion = SUPPORTED_OS_LIST[name]
				
				if ( ! recommendedVersion )
					outcome = `Sorry, but your operating system is not supported.`

				else if ( version )
				{
					if ( Number( vSimplify(version) ) < recommendedVersion )
						outcome = `Please upgrade your version to at least ${name} ${recommendedVersion}`
				}
			}

			if ( ! outcome )
			{
				setPassed( true )
				// outcome = `You are running<br/>${name} ${version}`
				// if ( versionName && versionName !== 'undefined' )
					// outcome += ` (${versionName})`
			}
		}

		setMessage( outcome )
	}

	const endCheck =()=> { onComplete(EStatus.PASSED) }

	return (
		<div style={ CSTYLES.outer( inColumns ) }>
			<div style={ resultCellStyle( inColumns ) }>
				<div style={ CSTYLES.title( inColumns ) }>{ title }</div>
				{ passed === true  && <Passed /> }
				{ passed === false && <Failed /> }
				{ message && <div style={ CSTYLES.result( inColumns ) } dangerouslySetInnerHTML={{ __html: message }} /> }
			</div>

			<div style={ CSTYLES.cell( inColumns ) }>
				<button style={ CSTYLES.button( inColumns ) } onClick={endCheck}>Continue</button>
			</div>
		</div>
	)
}

