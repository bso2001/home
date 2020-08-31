import React from 'react'
import Album from '../elements/Album'
import Config from '../library/config'
import DetailCard from '../elements/DetailCard'
import Header from '../elements/Header'


class LastSummerPage extends React.Component
{
	constructor()
	{
		super()
		this.data = Config.pageData( 'LastSummer' )

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
					imagePos="25%"
					title={this.data.bannerTitle}
					boldTitle={false}
					text={this.data.bannerText}
				/>
				<Album tracks={this.data.tracks} />
			</div>
		)
	}
}


export default LastSummerPage
