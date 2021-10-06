
import React from 'react'
import { Card, CardContent, withStyles } from '@material-ui/core'
import MyPlayer from './MyPlayer'
import Track from './Track'

const styling = theme => 
({
	album :
	{
		display : 'inherit',
		width : 'fit-content !important',
		height : 'fit-content !important',
		minWidth : '70%',
		padding : '2vh 4vw',
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

		let skipped = 0

		return ( <div>
			<Card className={classes.album}>
				<CardContent>
				{
					trackList.map( (track, index) =>
					{
						if ( track.title )
						{
							track.number = (index + 1) - skipped
							return <Track trackData={track} key={track.number} playCb={playTrack} />
						}
						else
						{
							skipped++
							return <hr />
						}
					})
				}
				</CardContent>
			</Card>
			<MyPlayer pPointer={this.pPointer} />
		</div> )
	}
}

export default withStyles( styling, { withTheme: true } )( Album )

