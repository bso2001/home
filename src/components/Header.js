import React from 'react'
import Config from '../library/config'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import './Header.css'

const styling = theme => 
({
	title :
	{
		color: '#efba35',
		marginLeft: '4vw !important',
		flex: 2
	},

	burger :
	{
		color: '#efba35',
		marginRight : '4vw',
		cursor : 'pointer'
	}
})

class Header extends React.Component
{
	state = { menuVisible : false }

	render()
	{
		const { classes } = this.props

		this.title = Config.paramData( 'headerTitle' )

		return (
			<div className="Header">
				<Typography variant="h5" className={classes.title}> <a href="/">{this.title}</a> </Typography>
				<div className="Header-menu-box">
					<Typography variant="h5" className={classes.burger}
										onClick={() => this.setState({ menuVisible : !this.state.menuVisible })}>
						{ this.menuIcon() }
					</Typography>

					{ this.showMenu() }
				</div>
			</div>
		)
	}

	showMenu()
	{
		if ( ! this.state.menuVisible )
			return null

		return (
			<div className="Header-menu" onClick={() => this.setState({ menuVisible : false })}>
				<a href="/music"> MUSIC </a>
				<a href="/images"> IMAGES </a>
				<a href="https://olsson.tech" target="_new"> TECHNOLOGY </a>
				<a target="_new" href= "https://www.ebay.com/sch/i.html?_saslop=1&_sasl=bso2001"> My eBay Listings </a>
				<a href="https://charts.bertolsson.com" target="_new"> Band Charts </a>
				<a href="https://olsson.tech/assets/Bert-Olsson-Resume.pdf" target="_new"> Résumé </a>
				<a href="https://olsson.tech/assets/Bert-Olsson-CV.pdf" target="_new"> TLDR? 1 page CV Here </a>
			</div>
		)
	}
	
	menuIcon()
	{
		return ( this.state.menuVisible ) ?  <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>
	}
}

export default withStyles( styling, { withTheme: true } )( Header )
