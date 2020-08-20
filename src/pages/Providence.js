import React from 'react'
import './Providence.css'

import Config from '../library/config'
import Header from '../components/Header'
import DetailCard from '../components/DetailCard'
import PortraitCard from '../components/PortraitCard'

class ProvidencePage extends React.Component
{
	constructor()
	{
		super()

		this.data = Config.pageData( 'Providence' )

		if ( ! this.data )
			this.data = {}

		this.portraitCards = PortraitCard.generateList( this.data )
	}

	render()
	{
		return (
			<div className="Page Providence-page">
				<Header />
				<DetailCard image={this.data.bannerImage} text={this.data.bannerText} />
				{ this.portraitCards }
			</div>
		)
	}
}

export default ProvidencePage
