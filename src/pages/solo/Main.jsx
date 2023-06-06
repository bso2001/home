
import React from 'react'
import Content from '../../library/content'
import DetailCard from '../../elements/DetailCard'
import PageData from '../../content/solo/Main.json'

class SoloWorksPage extends React.Component
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
				<DetailCard
					image={this.data.bannerImage}
					imagePos="80%"
					text={this.data.bannerText}
					title={this.data.bannerTitle}
				/>
				{ Content.generatePortraitCards( this.data.cards ) }
			</div>
		)
	}
}

export default SoloWorksPage

