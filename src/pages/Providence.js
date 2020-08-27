import React from 'react'
import Config from '../library/config'
import Header from '../components/Header'
import DetailCard from '../components/DetailCard'
import PortraitCard from '../components/PortraitCard'

class ProvidencePage extends React.Component
{

	constructor()
	{
		super()

		this.pageName = 'Providence'
		this.data = Config.pageData( this.pageName )

		if ( ! this.data )
			this.data = {}
		else
		{
			if ( ! this.data.bannerTitle )
				this.data.bannerTitle = this.pageName
		}

		this.portraitCards = PortraitCard.generateList( this.data )
	}

	render()
	{
		return (
			<div className="Page Providence-page">
				<Header />
				<DetailCard image={this.data.bannerImage} text={this.data.bannerText} title={this.data.bannerTitle} />
				{ this.portraitCards }
			</div>
		)
	}
}

export default ProvidencePage