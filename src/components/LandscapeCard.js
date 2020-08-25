import React from 'react'
import { isMobile } from 'react-device-detect'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import './LandscapeCard.css'

class LandscapeCard extends React.Component
{
	render()
	{
		let extraTextStyle = { marginTop: isMobile ? '.6vh' : '.3vh' }

		return (
			<Card className="Card LandscapeCard">
			    <CardContent>
				<div className="LandscapeCard-image-container">
					<div className="LandscapeCard-image" style={{ background: 'url(' + this.props.image + ')' }} alt=""></div>
				</div>
				<div className="LandscapeCard-text" style={extraTextStyle} dangerouslySetInnerHTML={{ __html: this.props.text }} />
			    </CardContent>
			</Card>
		)
	}
}

export default LandscapeCard
