import React from 'react'
import PortraitCard from '../components/PortraitCard'

const generatePortraitCards = ( pageData ) =>
{
	if ( pageData.cards )
	{
		for ( let cardTitle in pageData.cards )
		{
			let card = pageData.cards[ cardTitle ]
			this.portraitCards.push( <PortraitCard image={card.image} title={cardTitle} text={card.text} key={cardTitle} /> )
		}
	}
}

export default { generatePortraitCards }
