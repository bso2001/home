
import React from 'react'
import Content from '../library/content'
import LandscapeCard from '../elements/LandscapeCard'
import PageData from '../content/Home.json'

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
					imagePosX={this.data.bannerPosX}
					imagePosY={this.data.bannerPosY}
					text={this.data.bannerText}
				/>
				<div className="cards">
					{ Content.generatePortraitCards( this.data.cards ) }
				</div>
			</div>
		)
	}
}

export default HomePage

