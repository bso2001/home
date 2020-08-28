import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'


const styling = theme => 
({
	track :
	{
		display: 'flex',
		flexFlow: 'row',
		width : '100%;',
		marginBottom: '2vh'
	},
	trknum :
	{
		width:  '3.2vh',
		height: '3.2vh',
		marginRight: '2vw',
		backgroundSize: 'cover !important'
	},
	title :
	{
		fontWeight : 600,
		color: '#444 !important',
		cursor: 'pointer',
		marginTop: '2px',
		marginRight: '1.5vw'
	},
	runtime :
	{
		marginTop: '3px',
		color: '#707070 !important',
		textAlign : 'center'
	}
})


class Track extends React.Component
{
	render()
	{
		const { classes } = this.props

		let track = this.props.trackData
		let numImage = 'url(http://olsson.tech/assets/images/track-' + track.number + '.png)'

		return (
			<div className={classes.track} onClick={ () => this.trackSelected( track.link ) }>
				<div className={classes.trknum} style={{ background: numImage }} alt="" />
				<Typography noWrap={true} variant="body1" className={classes.title}>{ track.title }</Typography>
				<Typography noWrap={true} variant="subtitle2" className={classes.runtime}>{ '(' + track.time + ')' }</Typography>
			</div>
		)
	}

	trackSelected( link )
	{
		console.log(link)
	}
}


export default withStyles( styling, { withTheme: true } )( Track )
