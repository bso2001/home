
import React, { useEffect, useState } from 'react'

import { CSTYLES } from './styles'
import { EStatus } from '../constants'

// import { getChannels, getEventsList, createConversationMessage } from 'lib/api'
// import { isValidArray, isValidObject } from '@thebuzzcast/utils'

export const CheckApi = ({ status, image, title, onComplete }) =>
{
	const [result, setResult] = useState(null)

	useEffect( () =>
	{
		if ( status.value === EStatus.TESTING )
			runTest()
				/* eslint-disable react-hooks/exhaustive-deps */
	}, [status, result])

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
		setResult('Under Construction')
	}

	const endTest =()=>
	{
		onComplete(EStatus.PASSED, {})
	}

	return ( 
		<div style={ CSTYLES.outer }>

			<div style={ CSTYLES.column }>
				<img src={ image } alt={ title } style={ CSTYLES.image } />
			</div>

			<div style={ CSTYLES.column }>
				<div style={ CSTYLES.title }>{ title }</div>
				{/*
				<div style={ CSTYLES.result } dangerouslySetInnerHTML={{ __html: result }} />
				*/}
			</div>

			<div style={ CSTYLES.column }>
				<button style={ CSTYLES.button } onClick={endTest}>Continue</button>
			</div>

		</div>
	)
}

