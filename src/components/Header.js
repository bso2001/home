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
				<div id="Header-menu-box">
					<div id="Header-burger" onClick={this.toggleMenu}>
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
			<ul id="Header-menu">
				<li><a href="/music"> MUSIC </a></li>
				<li><a href="/images"> IMAGES </a></li>
				<li><a href="https://olsson.tech" target="_new"> TECHNOLOGY </a></li>
				<li><a target="_new" href= "https://www.ebay.com/sch/i.html?_saslop=1&_sasl=bso2001"> My eBay Listings </a></li>
				<li><a href="https://charts.bertolsson.com" target="_new"> Band Charts </a></li>
				<li><a href="https://olsson.tech/CS/Bert-Olsson-Resume.pdf" id="resume-link" target="_new"> Résumé </a></li>
				<li><a href="https://olsson.tech/CS/Bert-Olsson-CV.pdf" id="resume-link" target="_new"> TLDR? 1-pg CV here </a></li>
			</ul>
		)
	}
	
	menuIcon()
	{
		return ( this.state.menuVisible ) ?  <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>
	}
}

export default Header
