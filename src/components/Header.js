import React from 'react'
import './Header.css'

class Header extends React.Component
{
	state = { menuVisible : false }

	toggleMenu = () => { this.setState({ menuVisible : !this.state.menuVisible }) }

	render()
	{
		return (
			<div className="Header">
				<div className="Header-title"> <a href="/"> S. Bert Olsson </a> </div>
				<div className="Header-menu-box">
					<div className="Header-burger" onClick={this.toggleMenu}>
						{ this.menuIcon() }
					</div>

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
			<div className="Header-menu">
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

export default Header
