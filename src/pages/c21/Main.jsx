
import React from 'react'
import Content from '../../library/content'
import DetailCard from '../../elements/DetailCard'
import PageData from '../../content/c21/Main.json'

class Century21Page extends React.Component
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
			<div className="mainContent">
				<DetailCard
					image={this.data.bannerImage}
					imagePos="50%"
					text={this.data.bannerText}
					title={this.data.bannerTitle}
				/>
				{ Content.generatePortraitCards( this.data.cards ) }
			</div>
		)
	}
}

export default Century21Page

