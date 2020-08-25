import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import './PortraitCard.css'

class PortraitCard extends React.Component
{
	render()
	{
		return (
			<Card className="Card PortraitCard" onClick={ () => this.cardClicked() }>
			    <CardContent style={{ flexDirection : this.props.reverse ? 'row-reverse' : 'initial' }}>
				<div className="PortraitCard-image-container" style={{ backgroundColor : this.props.imageBg }}>
					<img src={this.props.image} alt="" />
				</div>
				<div className="PortraitCard-textbox">
					<Typography variant="h6">{this.props.title}</Typography>
					<Typography variant="body1" dangerouslySetInnerHTML={{ __html: this.props.text }} />
				</div>
			    </CardContent>
			</Card>
		)
	}

	cardClicked()
	{
		if ( this.props.link )
			window.top.location = this.props.link

		else if ( this.props.href )
			window.open( this.props.href, "_blank" )
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
						href={card.href}
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
