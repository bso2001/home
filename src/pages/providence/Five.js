import React from 'react'
import './Five.css'

import Config from '../../library/config'
import Header from '../../components/Header'
import DetailCard from '../../components/DetailCard'
import LandscapeCard from '../../components/LandscapeCard'

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
			</div>
		)
	}
}

export default ProvidenceFivePage
