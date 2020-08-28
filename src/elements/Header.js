import React from 'react'
import Config from '../library/config'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'


const styling = theme => 
({
	header :
	{
		position : 'fixed',
		top : '0',
		display : 'flex',
		flexFlow : 'row',
		alignItems : 'center',
		justifyContent : 'space-evenly',
		height : '5vh',
		width : '100%',
		zIndex : '100',
		backgroundColor : '#00699f',
		boxSizing : 'border-box'
	},

	menu :
	{
		position : 'absolute',
		top : '5vh',
		right : '0',
		margin : '0',
		width : 'fit-content',
		height : 'fit-content',
		padding : '1vh 0 1vh 0',
		backgroundColor : '#00699f',
		color : '#ffca45 !important',
		textDecoration : 'none'
	},

	menuItem :
	{
		display : 'block',
		width : '65vw',
		cursor : 'pointer',
		padding : '.5vh 0 .5vh 2vw',
		boxSizing : 'border-box'
	},

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
			<div className={classes.header}>
				<Typography variant="h5" className={classes.title}> <a href="/">{this.title}</a> </Typography>
				<Typography variant="h5" className={classes.burger}
									onClick={() => this.setState({ menuVisible : !this.state.menuVisible })}>
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
			<Typography variant="subtitle1" id="headerMenu" className={classes.menu} onClick={() => this.setState({ menuVisible : false })}>
				<a className={classes.menuItem} href="/music"> MUSIC </a>
				<a className={classes.menuItem} href="/images"> IMAGES </a>
				<a className={classes.menuItem} href="https://olsson.tech" target="_new"> TECHNOLOGY </a>
				<a className={classes.menuItem} target="_new" href= "https://www.ebay.com/sch/i.html?_saslop=1&_sasl=bso2001"> My eBay Listings </a>
				<a className={classes.menuItem} href="https://charts.bertolsson.com" target="_new"> Band Charts </a>
				<a className={classes.menuItem} href="https://olsson.tech/assets/Bert-Olsson-Resume.pdf" target="_new"> Résumé </a>
				<a className={classes.menuItem} href="https://olsson.tech/assets/Bert-Olsson-CV.pdf" target="_new"> TLDR? 1 page CV Here </a>
			</Typography>
		)
	}
	
	menuIcon()
	{
		return ( this.state.menuVisible ) ?  <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>
	}
}


export default withStyles( styling, { withTheme: true } )( Header )
