import AppJson from '../app-content.json'

const paramData = ( paramName ) =>
{
	if ( AppJson[ paramName ] )
		return AppJson[ paramName ]

	return null
}

const pageData = ( pageName ) =>
{
	if ( AppJson.pages && AppJson.pages[ pageName ] )
		return AppJson.pages[ pageName ]

	return null
}

export default { pageData, paramData }
