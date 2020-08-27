import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
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
	render()
	{
		const { classes } = this.props

		let trackList = this.props.tracks

		if ( ! trackList )
			trackList = []

		return (
			<Card className="Card" className={classes.album}>
				<CardContent>
				{
					trackList.map( (track, index) =>
					{
						track.number = index + 1
						return <Track trackData={track} key={track.number} />
					})
				}
				</CardContent>
			</Card>
		)
	}
}

export default withStyles( styling, { withTheme: true } )( Album )
