
import React, { useEffect, useState } from 'react'

import
{
	combinePropertyAndValue,
	CSS_PROPERTIES_WHITELIST,
	CSS_VALUES_WHITELIST,
	EStatus,
	NOT_SUPPORTED,
	propertiesInfo,
	SUPPORTED_BROWSERS,
	vSimplify,
} from '../common'

import { CSTYLES, resultCellStyle } from './styles'
import { Passed } from './Passed'
import { Failed } from './Failed'
import { getDeviceInfo } from 'library/device'

export const CheckBrowser = ({ status, title, inColumns, onComplete }) =>
{
	const [ versionPassed, setVersionPassed] = useState(null)
	const [ cssPassed, setCssPassed] = useState(null)
	const [ message, setMessage ] = useState(null)

	let messages = []

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			runChecks()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, messages])

	const checkVersion =()=>
	{
		const { browser, platform } = getDeviceInfo()

		if ( ! browser?.name )
		{
			messages.push( `Your browser couldn't be identified.` )
			setVersionPassed( false )
		}
		else
		{
			const { name, version } = browser

			if (SUPPORTED_BROWSERS[name] === NOT_SUPPORTED)
			{
				messages.push( `Your browser is not supported.` )
				setVersionPassed( false )
			}
			else
			{
				setVersionPassed( true )

				if ( version )
				{
					const recommendedVersion = SUPPORTED_BROWSERS[ platform?.type === "mobile" ? `${name} Mobile` : name ]

					if ( recommendedVersion )
					{
						if ( Number( vSimplify(version) ) < recommendedVersion )
							messages.push( `Please upgrade your version to at least ${name} ${recommendedVersion}` )
					}
				}
			}
		}
	}

	const checkCSS =()=>
	{
		const { style } = document.createElement( 'div' )
		const properties = Object.keys( propertiesInfo )

		setCssPassed( true )

		for ( let property of properties )
		{
						// console.log('property', property)
			const { values } = propertiesInfo[property]
			const isDefined = (value) => typeof value !== 'undefined'

			if ( isDefined( style[property] ))
			{
				values.forEach( (value) =>
				{
						// const msg1 = `tried to set ${style[property]} to ${value}`
					style[property] = value

					if ( style[property] !== value )
					{
						// console.log(msg1)
						// console.log('but we set it to', style[property])

						let propertyAndValue = combinePropertyAndValue(property, value)

						if ( ! CSS_VALUES_WHITELIST.includes(propertyAndValue) )
						{
							setCssPassed( false )
							messages.push( `CRITICAL ${propertyAndValue}` )
						}
					}
				})
			}
			else
			{
				if ( ! CSS_PROPERTIES_WHITELIST.includes(property) )
				{
					setCssPassed( false )
					messages.push( `CRITICAL ${property}` )
				}
			}
		}

		if ( ! cssPassed )
			messages.unshift( 'The following CSS properties and/or values were not found:' )
	}

	const runChecks =()=>
	{
		checkVersion()
		checkCSS()

		let msg = ''

		if ( messages.length )
			msg = messages.join( '<br/>' )

		setMessage( msg )
	}

	const endCheck =()=> { onComplete( versionPassed && cssPassed ) }

	return ( 
		<div style={ CSTYLES.outer( inColumns ) }>
			<div style={ resultCellStyle( inColumns ) }>
				<div style={ CSTYLES.title( inColumns ) }>{ title }</div>
				{ versionPassed===null ? null : (versionPassed ? <Passed msg="Version" /> : <Failed msg="Version" />) }
				{ cssPassed===null ? null : (cssPassed ? <Passed msg="CSS" /> : <Failed msg="CSS" />) }
				{ message && <div style={ CSTYLES.result( inColumns ) } dangerouslySetInnerHTML={{ __html: message }} /> }
			</div>

			<div style={ CSTYLES.cell( inColumns ) }>
				<button style={ CSTYLES.button( inColumns ) } onClick={endCheck}>Continue</button>
			</div>
		</div>
	)
}
