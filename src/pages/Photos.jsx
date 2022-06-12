
import React from 'react'
import Content from '../library/content'
import ImageGallery from 'react-image-gallery'
import PlainCard from '../elements/PlainCard'
import PageData from '../content/Photos.json'

class PhotosPage extends React.Component
{
	constructor()
	{
		super()

		this.data = Content.preProcessData( PageData )
		if ( ! this.data )
			this.data = {}

		if ( ! this.data.gallery )
			this.data.gallery = []
	}

	render()
	{
		return (
			<div className="mainContent">
				<PlainCard text={this.data.bannerText} style="padding-top: 40px;"/>
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

