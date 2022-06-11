
import React from 'react'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

const styling = theme => 
({
	landscapeCard :
	{
		width : '100%',
		display : 'flex',
		flexFlow : 'column',
		borderRadius : '0',
		backgroundColor : '#f8f8f8 !important'
	},

	text :
	{
		height : '50px',
		display : 'flex',
		alignItems : 'center',
		justifyContent : 'center',
		flexDirection : 'column',
		fontFamily : 'raleway, sans-serif !important',
		fontWeight : 400,
		fontSize : '2rem'
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

		let h = this.props.short ? '100px' : (isMobile ? '140px' : '200px')

		return (
			<Card className={classes.landscapeCard} style={{ marginBottom : this.props.noMargin ? '0' : '2vh' }}>
			    <CardContent>
				<div className={classes.imageContainer} style={{ height : h }}>
					<div style={imgStyle} ></div>
				</div>
				<Typography variant={isMobile ? `body1` : `h5`} className={classes.text}
										dangerouslySetInnerHTML={{ __html: this.props.text }} />
			    </CardContent>
			</Card>
		)
	}
}

export default withStyles( styling, { withTheme: true } )( LandscapeCard )

