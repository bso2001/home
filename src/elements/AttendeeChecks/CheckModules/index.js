
import { EStatus } from '../common'

const MAX_TEST_TIME = 12000

export const runTest = async (name, method, onLog, progressOrRetry, timeoutCallback) =>
{
	const endTest = () =>
	{
		if ( typeof progressOrRetry === 'object' )
		{
			const { progress, onProgress } = progressOrRetry
			onProgress(progress + 1)
		}

		else
			progressOrRetry(false)
	}

	let isTimedOut = false

	console.log(`click to run ${name}`)
	debugger		// a debug statement here allows a pause before each test

	const timeout = setTimeout( () =>
	{
		onLog( name, EStatus.FAILED, ['This test timed out.', `Maximum time of ${MAX_TEST_TIME / 1e3} seconds exceeded.`] )
		endTest()
		isTimedOut = true
	}, MAX_TEST_TIME)

	timeoutCallback.current = () => timeout

	console.log(`calling ${name}`)
	const { isPassed, info } = await method()
	console.log(`returned from ${name}:`, isPassed, info)

	if ( ! isTimedOut )
	{
		clearTimeout( timeout )
		onLog( name, EStatus[ isPassed ? 'PASSED' : 'FAILED' ], info )
		endTest()
		console.log(`ended ${name}`)
	}
}
