import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { Media, Player, controls, utils } from 'react-media-player'
const { CurrentTime, Duration, PlayPause, SeekBar } = controls


class MyPlayer extends React.Component
{
	render()
	{
		return (
			<Media>
				{ (mediaProps) => (
					<div className="MyPlayer">
						<Player src="https://s3.amazonaws.com/bso-public/mp3/Five/4.+four+corners.mp3" />
						<nav className="MyPlayerControls">
							<CurrentTime />
							<SeekBar />
							<Duration />
						</nav>
					</div>
				)}
			</Media>
		)
	}
}


export default MyPlayer
