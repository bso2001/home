import React from 'react'
import PortraitCard from '../components/PortraitCard'

const generatePortraitCards = ( pageData ) =>
{
	if ( pageData.cards )
	{
		for ( let cardTitle in pageData.cards )
		{
			let card = pageData.cards[ cardTitle ]

			this.portraitCards.push
			(
				<PortraitCard
					image={card.image}
					link={card.link}
					text={card.text}
					title={cardTitle}
					key={cardTitle}
				/>
			)
		}
	}
}

export default { generatePortraitCards }
