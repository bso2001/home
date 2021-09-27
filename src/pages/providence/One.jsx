
import React from 'react'
import Album from '../../elements/Album'
import DetailCard from '../../elements/DetailCard'
import PageData from '../../content/providence/One.json'

class ProvidenceOnePage extends React.Component
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
			<div className="mainContent Audio-Page">
				<DetailCard
					image={this.data.bannerImage}
					title={this.data.bannerTitle}
					boldTitle={false}
					text={this.data.bannerText}
				/>
				<Album tracks={this.data.tracks} />
			</div>
		)
	}
}

export default ProvidenceOnePage

