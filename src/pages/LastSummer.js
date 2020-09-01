import React from 'react'
import Album from '../elements/Album'
import Content from '../library/content'
import DetailCard from '../elements/DetailCard'
import Header from '../elements/Header'
import PageData from '../content/LastSummer.json'


class LastSummerPage extends React.Component
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
