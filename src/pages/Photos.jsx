
import React from 'react'
import ImageGallery from 'react-image-gallery'
import LandscapeCard from '../elements/LandscapeCard'
import PageData from '../content/Photos.json'

class PhotosPage extends React.Component
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
			<div className="mainContent">
				<LandscapeCard
					image={this.data.bannerImage}
					imagePos={this.data.bannerPos}
					text={this.data.bannerText}
				/>
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

export default PhotosPage

