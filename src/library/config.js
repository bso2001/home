import AppJson from '../app-content.json'

const pageData = ( pageName ) =>
{
	if ( AppJson.pages && AppJson.pages[ pageName ] )
		return AppJson.pages[ pageName ]

	return null
}

export default { pageData }
