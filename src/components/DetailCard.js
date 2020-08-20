import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import './DetailCard.css'

class DetailCard extends React.Component
{
	render()
	{
		return (
			<Card className="Card DetailCard">
			    <CardContent>
				<div className="DetailCard-image-container">
					<div className="DetailCard-image" style={{ background: 'url(' + this.props.image + ')' }} alt=""></div>
				</div>
				<div className="DetailCard-title">{ this.props.title }</div>
				<div className="DetailCard-text" dangerouslySetInnerHTML={{ __html: this.props.text }} />
			    </CardContent>
			</Card>
		)
	}
}

export default DetailCard
