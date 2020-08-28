import React from 'react'
import PortraitCard from '../elements/PortraitCard'

const generatePortraitCards = ( cards, initiallyReverse? ) =>
{
	let pclist  = []
	let reverse = (initiallyReverse !== undefined) ? initiallyReverse : false

	for ( let cardTitle in cards )
	{
		let card = cards[ cardTitle ]

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

	return pclist
}

export default { generatePortraitCards }
