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
						<i className="fa fa-bars"></i>
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
				<li><a href="/music"> Music </a></li>
				<li><a href="/images"> Images </a></li>
				<li><a href="https://olsson.tech" target="_new"> Tech </a></li>
				<li><a href="https://charts.bertolsson.com" target="_new"> Charts </a></li>
				<li><a href="https://olsson.tech/CS/Bert-Olsson-Resume.pdf" id="resume-link" target="_new"> Résumé </a></li>
				<li><a href="https://olsson.tech/CS/Bert-Olsson-CV.pdf" id="resume-link" target="_new"> TLDR? 1-Page CV </a></li>
			</ul>
		)
	}
}

export default Header
