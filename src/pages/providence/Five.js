import React from 'react'
import Album from '../../elements/Album'
import Config from '../../library/config'
import DetailCard from '../../elements/DetailCard'
import Header from '../../elements/Header'
import MyPlayer from '../../elements/MyPlayer'

class ProvidenceFivePage extends React.Component
{

	constructor()
	{
		super()
		this.data = Config.pageData( 'ProvidenceFive' )
		this.pPointer = {}
		this.playing = false;
	}

	render()
	{
		let playTrack = (url) =>
		{
			let player = this.pPointer.player._component._player
			player.src = url

			if ( !this.playing )
				player.play()
			else
				player.pause()

			this.playing = ! this.playing
		}

		return (
			<div className="Page ProvidenceFive-page">
				<Header />
				<DetailCard image={this.data.bannerImage} title={this.data.bannerTitle} text={this.data.bannerText} />
				<Album playCb={playTrack} tracks={this.data.tracks} />
				<MyPlayer pPointer={this.pPointer} />
			</div>
		)
	}
}

export default ProvidenceFivePage
