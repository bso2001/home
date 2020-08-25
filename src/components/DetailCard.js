import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import './DetailCard.css'

const styling = theme => 
({
	description :  { padding: '0 4vw 0 4vw' }
})

class DetailCard extends React.Component
{
	render()
	{
		const { classes } = this.props

		return (
			<Card className="Card DetailCard">
			    <CardContent>
				<div className="DetailCard-image-container">
					<div className="DetailCard-image" style={{ background: 'url(' + this.props.image + ')' }} alt=""></div>
				</div>
				<div className="DetailCard-title">{ this.props.title }</div>
				<Typography variant="body1" className={classes.description} color="textSecondary"
											dangerouslySetInnerHTML={{ __html: this.props.text }} />
			    </CardContent>
			</Card>
		)
	}
}

export default withStyles( styling, { withTheme: true } )( DetailCard )
