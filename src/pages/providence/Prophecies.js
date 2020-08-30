import React from 'react'
import Album from '../../elements/Album'
import Config from '../../library/config'
import DetailCard from '../../elements/DetailCard'
import Header from '../../elements/Header'


class ProvidencePropheciesPage extends React.Component
{
	constructor()
	{
		super()
		this.data = Config.pageData( 'ProvidenceProphecies' )

		if ( ! this.data )
			this.data = {}
	}

	render()
	{
		return (
			<div className="Page ProvidenceProphecies-page">
				<Header />
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


export default ProvidencePropheciesPage
