import React from 'react'
import Album from '../../elements/Album'
import Config from '../../library/config'
import DetailCard from '../../elements/DetailCard'
import Header from '../../elements/Header'

class ProvidenceFivePage extends React.Component
{
	constructor()
	{
		super()
		this.data = Config.pageData( 'ProvidenceFive' )
	}

	render()
	{
		return (
			<div className="Page ProvidenceFive-page">
				<Header />
				<DetailCard image={this.data.bannerImage} title={this.data.bannerTitle} text={this.data.bannerText} />
				<Album tracks={this.data.tracks} />
			</div>
		)
	}
}

export default ProvidenceFivePage
