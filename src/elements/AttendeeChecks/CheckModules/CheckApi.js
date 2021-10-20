
import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../common'
import { Error } from './Error'
import { Okay } from './Okay'

// import { getChannels, getEventsList, createConversationMessage } from 'lib/api'
// import { isValidArray, isValidObject } from '@thebuzzcast/utils'

export const CheckApi = ({ status, image, title, isRowBased, onComplete }) =>
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
*/
		setMessage('Under Construction')
	}

	const endTest =()=>
	{
		onComplete(passed, {})
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

