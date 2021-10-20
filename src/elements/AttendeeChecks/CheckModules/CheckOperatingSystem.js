
import React, { useEffect, useState } from 'react'

import { getDeviceInfo } from 'library/device'
import { Error } from './Error'
import { Okay } from './Okay'
import { CSTYLES } from './styles'
import { EStatus, SUPPORTED_OS_LIST, vSimplify } from '../common'

export const CheckOperatingSystem = ({ status, image, title, isRowBased, onComplete }) =>
{
	const [passed, setPassed] = useState(false)
	const [message, setMessage] = useState(null)

	useEffect( () =>
	{
		if ( status.value === EStatus.PENDING || status.value === EStatus.TESTING )
			runTest()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, message])

	const runTest =()=>
	{
		const { os } = getDeviceInfo()
		let outcome = null

		if ( ! os?.name )
			outcome = `Sorry, but your operating system couldn't be identified.`
		else
		{
			let { name, version, versionName } = os

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
				outcome = `You are running<br/>${name} ${version} (${versionName})`
			}
		}

		setMessage( outcome )
	}

	const endTest =()=>
	{
		onComplete(EStatus.PASSED, {})
	}

	const col3style = { ...CSTYLES.column(isRowBased), justifyContent : isRowBased ? 'flex-end' : 'flex-start' }

	return ( message &&
		<div style={ CSTYLES.outer(isRowBased) }>

			<div style={ CSTYLES.column(isRowBased) }>
				<img src={ image } alt={ title } style={ CSTYLES.image(isRowBased) } />
			</div>

			<div style={ CSTYLES.column(isRowBased) }>
				<div style={ CSTYLES.title }>{ title }</div>
				{ passed ? <Okay msg={ message } /> : <Error msg={ message } /> }
			</div>

			<div style={ col3style }>
				<button style={ CSTYLES.button } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}

