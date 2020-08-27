import React from 'react'
import Config from '../library/config'
import Header from '../elements/Header'
import LandscapeCard from '../elements/LandscapeCard'
import PortraitCard from '../elements/PortraitCard'

class MusicPage extends React.Component
{
	constructor()
	{
		super()

		this.data = Config.pageData( 'Music' )

		if ( ! this.data )
			this.data = {}

		this.portraitCards = PortraitCard.generateList( this.data )
	}

	render()
	{
		return (
			<div className="Page Music-page">
				<Header />
				<LandscapeCard image={this.data.bannerImage} text={this.data.bannerText} />
				{ this.portraitCards }
			</div>
		)
	}
}

export default MusicPage
