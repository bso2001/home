import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import './PortraitCard.css'

class PortraitCard extends React.Component
{
	render()
	{
		return (
			<Card className="Card PortraitCard" onClick={ () => this.cardClicked(this.props.link) }>
			    <CardContent style={{ flexDirection : this.props.reverse ? 'row-reverse' : 'initial' }}>
				<div className="PortraitCard-image-container" style={{ backgroundColor : this.props.imageBg }}>
					<img src={this.props.image} alt="" />
				</div>
				<div className="PortraitCard-textbox">
					<div className="PortraitCard-title">{this.props.title}</div>
					<div className="PortraitCard-text">{this.props.text}</div>
				</div>
			    </CardContent>
			</Card>
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

				if ( ! card.imageBg )
					card.imageBg = 'white'

				pclist.push
				(
					<PortraitCard
						image={card.image}
						imageBg={card.imageBg}
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
