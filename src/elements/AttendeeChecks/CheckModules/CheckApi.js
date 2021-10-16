
import React from 'react'

// import { getChannels, getEventsList, createConversationMessage } from 'lib/api'
// import { isValidArray, isValidObject } from '@thebuzzcast/utils'

export const CheckApi = ({ active, onComplete }) =>
{

	if ( !active )
		return <div></div>
/*
	const networkCheck = async () =>
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

		if (isPassed)
			return PASS

		return new Result(false, isValidArray(info) ? info : ['An error occurred'])
	}
*/

	return <div>Network Check</div>
}

