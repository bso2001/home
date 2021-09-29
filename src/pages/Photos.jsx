
import React from 'react'
import ImageGallery from 'react-image-gallery'
import PlainCard from '../elements/PlainCard'
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
				<PlainCard text={this.data.bannerText} />
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

