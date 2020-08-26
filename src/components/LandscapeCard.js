import React from 'react'
import { isMobile } from 'react-device-detect'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import './LandscapeCard.css'

const styling = theme => 
({
	text :
	{
		textAlign : 'center',
		marginTop : isMobile ? '.6vh' : '.3vh'
	}
})

class LandscapeCard extends React.Component
{
	render()
	{
		const { classes } = this.props

		return (
			<Card className="Card LandscapeCard">
			    <CardContent>
				<div className="LandscapeCard-image-container">
					<div className="LandscapeCard-image" style={{ background: 'url(' + this.props.image + ')' }} alt=""></div>
				</div>
				<Typography variant="h6" className={classes.text} dangerouslySetInnerHTML={{ __html: this.props.text }} />
			    </CardContent>
			</Card>
		)
	}
}

export default withStyles( styling, { withTheme: true } )( LandscapeCard )
