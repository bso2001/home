import React from 'react'
import { isMobile } from 'react-device-detect'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'


const styling = theme => 
({
	landscapeCard :
	{
		width : '100%',
		height : '18vh',
		maxHeight : '18vh',
		display : 'flex',
		flexFlow : 'column',
		marginBottom : '2vh !important',
		backgroundColor : '#f8f8f8 !important',
		borderRadius : '0 !important'
	},
	imageContainer :
	{
		width : '100%',
		height : '75%'
	},
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

		let imgStyle =
		{
			backgroundSize : 'cover',
			backgroundRepeat : 'no-repeat',
			height : '100%',
			backgroundImage : 'url(' + this.props.image + ')',
			backgroundPositionY : this.props.imagePos ? this.props.imagePos : '70%'
		}

		return (
			<Card className={classes.landscapeCard}>
			    <CardContent>
				<div className={classes.imageContainer}>
					<div style={imgStyle} ></div>
				</div>
				<Typography variant="h6" className={classes.text} dangerouslySetInnerHTML={{ __html: this.props.text }} />
			    </CardContent>
			</Card>
		)
	}
}


export default withStyles( styling, { withTheme: true } )( LandscapeCard )
