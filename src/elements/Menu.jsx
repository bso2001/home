
import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

const styling = theme => 
({
	container :
	{
		zIndex: '1000',
		position : 'fixed',
		top : '0',
		right : '0',
	},

	icon :
	{
		color: '#bfcf9f',
		float : 'right',
		cursor : 'pointer',
		fontSize: '2.2em',
		height : '1.5em',
		width : '2em',
		textAlign: 'center',
		backgroundColor : 'rgba(64,64,64,.8)'
	},

	menu :
	{
		marginTop: '-20px',
		padding: '24px 0 10px 0',
		backgroundColor : '#3f3f3f',
		textDecoration : 'none'
	},

	menuItem :
	{
		display : 'block',
		width : isMobile ? '200px' : '400px',
		cursor : 'pointer',
		margin : '10px 0 10px 20px',
		fontFamily : 'serenity, sans-serif !important',
		fontSize: isMobile ? '1.8rem' : '1.6rem',
		fontWeight: '300',
		color: '#bfcf9f !important',
		boxSizing : 'border-box'
	},

	title :
	{
		marginLeft: '4% !important',
		flex: 2
	}
})

class Menu extends React.Component
{
	state = { menuVisible : false }

	render()
	{
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<Typography className={classes.icon} onClick={() => this.setState({ menuVisible : !this.state.menuVisible })}>
					{ this.menuIcon() }
				</Typography>

				{ this.showMenu( classes ) }
			</div>
		)
	}

	showMenu( classes )
	{
		if ( ! this.state.menuVisible )
			return null

		return (
			<Typography variant="subtitle1" className={classes.menu} onClick={() => this.setState({ menuVisible : false })}>
				<a className={classes.menuItem} href="/"> Home </a>
				<a className={classes.menuItem} href="https://tntp.bandcamp.com" target="_new"> Music </a>
				<a className={classes.menuItem} href="https://www.linkedin.com/in/bert-olsson/" target="_new"> Technology </a>
				<a className={classes.menuItem} href="https://www.youtube.com/@noztrey" target="_new"> Video </a>
				<a className={classes.menuItem} href="https://charts.bertolsson.com" target="_new"> Band Charts </a>
				<a className={classes.menuItem} href="/assets/Bert-Olsson-Resume.pdf" target="_new"> Résumé </a>
				<a className={classes.menuItem} href="/assets/Bert-Olsson-CV.pdf" target="_new"> TLDR? 1 page CV Here </a>
			</Typography>
		)
	}
	
	menuIcon()
	{
		return ( this.state.menuVisible ) ?  <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>
	}
}

export default withStyles( styling, { withTheme: true } )( Menu )

