
import React from 'react'
import Content from 'library/content'
import LandscapeCard from 'elements/LandscapeCard'
import PageData from 'content/Home.json'

class HomePage extends React.Component
{
	constructor()
	{
		super()
		this.data = Content.preProcessData( PageData )
		if ( ! this.data )
			this.data = {}
	}

	render()
	{
		return (
			<div className="mainContent">
				<LandscapeCard
					image={this.data.bannerImage}
					imagePos={this.data.bannerPos}
					text={this.data.bannerText}
				/>
				{ Content.generatePortraitCards( this.data.cards ) }
			</div>
		)
	}
}

export default HomePage

