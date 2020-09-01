import React from 'react'
import Content from '../../library/content'
import Header from '../../elements/Header'
import DetailCard from '../../elements/DetailCard'
import PageData from '../../content/Solo/Main.json'

class SoloWorksPage extends React.Component
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
