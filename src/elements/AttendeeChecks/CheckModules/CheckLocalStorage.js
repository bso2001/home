
import React from 'react'

export const CheckLocalStorage = ({ active, onComplete }) =>
{
	if ( !active )
		return <div></div>

	let testResult = 'Local Storage Check'

	try
	{
		const test = 'test'
		localStorage.setItem( test, test )
		localStorage.removeItem( test )
		testResult = 'passed'
	}
	catch (e)
	{
		testResult = 'failed'
	}

	return <div>{testResult}</div>
}
