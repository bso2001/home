import React from 'react'
import Content from '../library/content'
import Header from '../elements/Header'
import LandscapeCard from '../elements/LandscapeCard'
import PageData from '../content/Images.json'

class ImagesPage extends React.Component
{
	constructor()
	{
		super()
		this.data = PageData
		if ( ! this.data )
			this.data = {}
	}

	render()
	{
		return (
			<div className="Page">
				<Header />
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

export default ImagesPage
