import React from 'react'
import './LandscapeCard.css'

class LandscapeCard extends React.Component
{
	render()
	{
		return (
			<div className="Card LandscapeCard">
				<div className="LandscapeCard-image-container">
					<div className="LandscapeCard-image" style={{ background: 'url(' + this.props.image + ')' }} alt=""></div>
				</div>
				<div className="LandscapeCard-text">{this.props.text}</div>
			</div>
		)
	}
}

export default LandscapeCard
