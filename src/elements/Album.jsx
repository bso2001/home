import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import MyPlayer from './MyPlayer'
import Track from './Track'
import { withStyles } from '@material-ui/core/styles'


const styling = theme => 
({
	album :
	{
		display : 'inherit',
		width : 'fit-content !important',
		height : 'fit-content !important',
		minWidth : '70%',
		padding : '2vh 4vw 0 4vw',
		margin : '0 auto !important',
	}
})


class Album extends React.Component
{
	constructor()
	{
		super()
		this.pPointer = {}
		this.lastTrack = null
		this.nullmp3 = 'https://s3.amazonaws.com/bso-public/mp3/null.mp3'
	}

	render()
	{
		const { classes } = this.props

		let trackList = this.props.tracks
		if ( ! trackList )
			trackList = []

		let playTrack = (url) =>
		{
			let player = this.pPointer.player._component._player

			let playUrl = (url) =>
			{
				if ( this.lastTrack !== url )
					player.src = this.lastTrack = url
				player.play()
			}

			if ( player.paused )
				playUrl( url )
			else
			{
				player.pause()

				if ( this.lastTrack !== url )
					playUrl( url )
			}
		}

		return ( <div>
			<Card className={classes.album}>
				<CardContent>
				{
					trackList.map( (track, index) =>
					{
						track.number = index + 1
						return <Track trackData={track} key={track.number} playCb={playTrack} />
					})
				}
				</CardContent>
			</Card>
			<MyPlayer pPointer={this.pPointer} nullmp3={this.nullmp3} />
		</div> )
	}
}


export default withStyles( styling, { withTheme: true } )( Album )