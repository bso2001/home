
import React from 'react'
import Album from '../../elements/Album'
import Content from '../../library/content'
import DetailCard from '../../elements/DetailCard'
import PageData from '../../Content/gas-music/Art'

class ArtImitatesLifePage extends React.Component
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
					image={this.data.bannerImage}
					imagePos="40%"
					title={this.data.bannerTitle}
					boldTitle={false}
					text={this.data.bannerText}
				/>
				<Album tracks={this.data.tracks} />
			</div>
		)
	}
}

export default ArtImitatesLifePage

