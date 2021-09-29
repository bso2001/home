
import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

const styling = theme => 
({
	track :
	{
		display: 'flex',
		flexFlow: 'row',
		width : '100%;',
		marginBottom: '2%',
		alignItems : 'baseline'
	},

	trknum :
	{
		fontFamily : 'raleway-medium, sans-serif !important',
		fontSize : isMobile ? '1.25rem' : '1.1rem',
		color : '#888',
		marginRight: '4px'
	},

	title :
	{
		fontFamily : 'novecento-sans, sans-serif !important',
		fontWeight : '500',
		fontSize : isMobile ? '1.4rem' : '1.2rem',
		color: '#444 !important',
		cursor: 'pointer',
		marginTop: '2px',
		marginRight: '1.5vw'
	},

	runtime :
	{
		color: '#707070 !important',
		fontSize : isMobile ? '1.1rem' : '.8rem'
	}
})

class Track extends React.Component
{
	render()
	{
		const { classes } = this.props

		this.playCb = this.props.playCb
		let track = this.props.trackData

		return (
			<div className={classes.track} onClick={ () => this.playCb( track.link ) }>
				<div className={classes.trknum}>{track.number}.&nbsp;</div>
				<Typography noWrap={true} variant="body1" className={classes.title}>{ track.title }</Typography>
				<Typography noWrap={true} variant="subtitle2" className={classes.runtime}>{ '(' + track.time + ')' }</Typography>
			</div>
		)
	}
}

export default withStyles( styling, {withTheme:true} )(Track)

