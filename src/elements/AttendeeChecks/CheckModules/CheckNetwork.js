
import React, { useEffect, useState } from 'react'

import { CSTYLES, resultCellStyle } from './styles'
import { EStatus } from '../common'
import { Passed } from './Passed'
import { Failed } from './Failed'

// import { getChannels, getEventsList, createConversationMessage } from 'lib/api'
// import { isValidArray, isValidObject } from '@thebuzzcast/utils'

export const CheckNetwork = ({ status, title, inColumns, onComplete }) =>
{
	const [passed, setPassed] = useState(null)
	const [message, setMessage] = useState('Checking Network...')

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			runCheck()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, message])

const getEventsList =()=>
{
	return new Promise( (resolve) => { setTimeout( ()=>{ resolve({ items : [ '1', '2', '3' ] })}, 800 )})
}

	const getEvents = async() =>
	{
		return new Promise( (resolve) =>
		{
			try
			{
				getEventsList().then( (rsp) =>
				{
					if ( ! rsp?.items || ! Array.isArray( rsp.items ))
					{
						resolve(EStatus.FAILED)
						console.error('CheckNetwork:', rsp)
					}
					else
						resolve(EStatus.PASSED)
				})
			}
			catch (e)
			{
				console.error('CheckNetwork:', e)
				resolve(EStatus.FAILED)
			}
		})
	}

	const runCheck = async() =>
	{
		let message = ''
		const result = await getEvents()

		if ( result === EStatus.PASSED )
			setPassed( true )
		else
		{
			message = 'Network request failed.'
			setPassed( false )
		}

		setMessage( message )
	}
	/*
	{
		let isPassed = true
		let info = []
		let responseRestApi = null
		let responseGraphQlQuery = null
		let responseGraphQlMutation = null

		try
		{
			responseRestApi = await getChannels()
			responseGraphQlQuery = await getEventsList()
			responseGraphQlMutation = await createConversationMessage(
			{
				content: 'test',
				conversationId: 'test',
				userId: 'test',
			})
		}
		catch (e)
		{
			console.error('testApi:', e)
			isPassed = false
			info = e.errors?.map(({ message }) => message).filter(Boolean) || []
		}

		if (!responseRestApi || !isValidArray(responseRestApi))
		{
			isPassed = false
			info = [...info, 'The REST request returned an invalid response']
			console.error(responseRestApi)
		}

		if (!responseGraphQlQuery || !isValidArray(responseGraphQlQuery.items))
		{
			isPassed = false
			info = [...info, 'The GraphQL Query request returned an invalid response']
			console.error(responseGraphQlQuery)
		}

		if (!responseGraphQlMutation || !isValidObject(responseGraphQlMutation))
		{
			isPassed = false
			info = [...info, 'The GraphQL Mutation request returned an invalid response']
			console.error(responseGraphQlMutation)
		}
		setMessage('Under Construction')
	}
*/

	const endCheck =()=> { onComplete(passed) }

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

