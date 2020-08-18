import React from 'react'
import './PortraitCard.css'

class PortraitCard extends React.Component
{
	render()
	{
		return (
			<div className="Card PortraitCard">
				<div className="PortraitCard-image-container">
					<img src={this.props.image} alt="" />
				</div>
				<div className="PortraitCard-textbox">
					<div className="PortraitCard-title">{this.props.title}</div>
					<div className="PortraitCard-text">{this.props.text}</div>
				</div>
			</div>
		)
	}

	static generateList( pageData )
	{
		let pclist = []

		if ( pageData.cards )
		{
			for ( let cardTitle in pageData.cards )
			{
				let card = pageData.cards[ cardTitle ]
				pclist.push( <PortraitCard image={card.image} title={cardTitle} text={card.text} key={cardTitle} /> )
			}
		}

		return pclist
	}
}

export default PortraitCard
