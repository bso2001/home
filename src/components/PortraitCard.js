import React from 'react'
import './PortraitCard.css'

class PortraitCard extends React.Component
{
	render()
	{
		return (
			<div className="Card PortraitCard" onClick={ () => this.cardClicked(this.props.link) }
					style={{ flexDirection : this.props.reverse ? 'row-reverse' : 'initial' }}>
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

	cardClicked( link )
	{
		if ( link )
			window.top.location = link
	}

	static generateList( pageData )
	{
		let pclist = []

		if ( pageData && pageData.cards )
		{
			let reverse = false

			for ( let cardTitle in pageData.cards )
			{
				let card = pageData.cards[ cardTitle ]

				pclist.push
				(
					<PortraitCard
						image={card.image}
						link={card.link}
						title={cardTitle}
						reverse={reverse}
						text={card.text}
						key={cardTitle}
					/>
				)

				reverse = !reverse
			}
		}

		return pclist
	}
}

export default PortraitCard
