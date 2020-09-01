import React from 'react'
import Config from '../../library/config'
import Content from '../../library/content'
import Header from '../../elements/Header'
import DetailCard from '../../elements/DetailCard'

class ProvidencePage extends React.Component
{

	constructor()
	{
		super()

		this.pageName = 'Providence'
		this.data = Config.pageData( this.pageName )

		if ( ! this.data )
			this.data = {}
	}

	render()
	{
		return (
			<div className="Page">
				<Header />
				<DetailCard image={this.data.bannerImage} text={this.data.bannerText} title={this.data.bannerTitle} />
				{ Content.generatePortraitCards( this.data.cards ) }
			</div>
		)
	}
}

export default ProvidencePage
