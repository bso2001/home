import React from 'react'
import './DetailCard.css'

class DetailCard extends React.Component
{
	render()
	{
		return (
			<div className="Card DetailCard">
				<div className="DetailCard-image-container">
					<div className="DetailCard-image" style={{ background: 'url(' + this.props.image + ')' }} alt=""></div>
				</div>
				<div className="DetailCard-text">{this.props.text}</div>
			</div>
		)
	}
}

export default DetailCard
