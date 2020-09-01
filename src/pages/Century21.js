import React from 'react'
import Config from '../library/config'
import Content from '../library/content'
import Header from '../elements/Header'
import DetailCard from '../elements/DetailCard'

class Century21Page extends React.Component
{

	constructor()
	{
		super()

		this.pageName = 'Century21'
		this.data = Config.pageData( this.pageName )

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
