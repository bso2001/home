import React from 'react'
import { render } from '@testing-library/react'
import Landing from './Landing'

test( 'renders ReactJs link', () =>
{
	const { getByText } = render( <Landing /> )
	const reactLink = getByText( /reactjs/i )

	expect( reactLink ).toBeInTheDocument()
})
