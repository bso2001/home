
import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

const styling = theme => 
({
	container :
	{
		position : 'fixed',
		top : '1vh',
		right : '0px',
	},

	icon :
	{
		color: '#bfcf9f',
		float : 'right',
		cursor : 'pointer',
		fontSize: '32px',
		marginRight : '10px',
		height : '44px',
		width : '50px',
		textAlign: 'center',
		borderRadius : '4px',
		backgroundColor : 'rgba(100, 100, 100, 0.9)',
	},

	menu :
	{
		backgroundColor : '#044567',
		color : '#ffca45 !important',
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
		boxSizing : 'border-box'
	},

	title :
	{
		color: '#efba35',
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
				<a className={classes.menuItem} href="/music"> Music </a>
				<a className={classes.menuItem} href="/images"> Imagery </a>
				<a className={classes.menuItem} href="https://olsson.tech" target="_new"> Technology </a>
				<a className={classes.menuItem} href="https://charts.bertolsson.com" target="_new"> Band Charts </a>
				<a className={classes.menuItem} href="https://cdn.olsson.tech/Bert-Olsson-Resume.pdf" target="_new"> Résumé </a>
				<a className={classes.menuItem} href="https://cdn.olsson.tech/Bert-Olsson-CV.pdf" target="_new"> TLDR? 1 page CV Here </a>
			</Typography>
		)
	}
	
	menuIcon()
	{
		return ( this.state.menuVisible ) ?  <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>
	}
}

export default withStyles( styling, { withTheme: true } )( Menu )

