import React from 'react'
import ImageGallery from 'react-image-gallery'
import Header from '../elements/Header'
import LandscapeCard from '../elements/LandscapeCard'
import PageData from '../content/Webcams.json'

class WebcamsPage extends React.Component
{
	constructor()
	{
		super()

		this.data = PageData
		if ( ! this.data )
			this.data = {}

		if ( ! this.data.gallery )
			this.data.gallery = []
	}

	render()
	{
		return (
			<div className="Page">
				<Header />
				<LandscapeCard image={this.data.bannerImage} text={this.data.bannerText} />
				<ImageGallery
					items={this.data.gallery}
					showBullets={true}
					showIndex={false}
					showNav={true}
					showThumbnails={false}
					showFullscreenButton={false}
					showPlayButton={false}
				/>
			</div>
		)
	}
}

export default WebcamsPage
