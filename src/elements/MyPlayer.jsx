
import React from 'react'
import { Media, Player, controls } from 'react-media-player'

const { CurrentTime, Duration, SeekBar } = controls

class MyPlayer extends React.Component
{
	constructor( props )
	{
		super(props)
		this.pPointer = props.pPointer
		this.nullmp3 = props.nullmp3
	}

	render()
	{
		this.storePlayer = (element) => { this.pPointer.player = element }

		return (
			<Media>
				{ (mediaProps) => (
					<div className="MyPlayer">
						<Player ref={this.storePlayer} src={this.nullmp3} />
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

