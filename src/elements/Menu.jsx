
import React from 'react'
import { Typography, withStyles } from '@material-ui/core'

const styling = theme => 
({
	container :
	{
		position : 'absolute',
		top : '10px',
		right : '0',
	},

	icon :
	{
		color: '#efba35',
		marginRight : '4vw',
		cursor : 'pointer',
		fontSize: '30px',
		height : '40px',
		width : '40px'
	},

	menu :
	{
		marginTop : '-50px',
		padding : '10px 0',
		backgroundColor : '#00699f',
		color : '#ffca45 !important',
		textDecoration : 'none'
	},

	menuItem :
	{
		display : 'block',
		width : '40vw',
		cursor : 'pointer',
		padding : '.5vh 0 .5vh 2vw',
		boxSizing : 'border-box'
	},

	title :
	{
		color: '#efba35',
		marginLeft: '4vw !important',
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
				<Typography variant="h5" className={classes.icon} onClick={() => this.setState({ menuVisible : !this.state.menuVisible })}>
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
				<a className={classes.menuItem} href="/images"> Images </a>
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
