
import React from 'react'
import Album from '../../elements/Album'
import Content from '../../library/content'
import DetailCard from '../../elements/DetailCard'
import PageData from '../../Content/solo/Heat.json'

class FunWithLightAndHeatPage extends React.Component
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
			<div className="mainContent Audio-Page">
				<DetailCard
					boldTitle={false}
					image={this.data.bannerImage}
					title={this.data.bannerTitle}
					text={this.data.bannerText}
				/>
				<Album tracks={this.data.tracks} />
			</div>
		)
	}
}

export default FunWithLightAndHeatPage

