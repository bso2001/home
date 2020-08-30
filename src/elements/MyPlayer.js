import React from 'react'
import { Media, Player, controls } from 'react-media-player'

const { CurrentTime, Duration, SeekBar } = controls

class MyPlayer extends React.Component
{
	constructor( props )
	{
		super(props)
		this.pPointer = props.pPointer
	}

	render()
	{
		this.storePlayer = (element) => { this.pPointer.player = element }

		return (
			<Media>
				{ (mediaProps) => (
					<div className="MyPlayer">
						<Player ref={this.storePlayer} src="https://s3.amazonaws.com/bso-public/mp3/Five/4.+four+corners.mp3" />
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
