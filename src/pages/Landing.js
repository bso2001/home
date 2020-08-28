import React from 'react'
import Config from '../library/config'
import Content from '../library/content'
import Header from '../elements/Header'
import LandscapeCard from '../elements/LandscapeCard'

class LandingPage extends React.Component
{
	constructor()
	{
		super()

		this.data = Config.pageData( 'Landing' )
		if ( ! this.data )
			this.data = {}
	}

	render()
	{
		return (
			<div className="Page">
				<Header />
				<LandscapeCard image={this.data.bannerImage} text={this.data.bannerText} />
				{ Content.generatePortraitCards( this.data.cards ) }
			</div>
		)
	}
}

export default LandingPage
