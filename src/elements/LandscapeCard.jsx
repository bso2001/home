
import React from 'react'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

const styling = theme => 
({
	landscapeCard :
	{
		width : '100%',
		maxWidth: '1024px',
		display : 'flex',
		flexFlow : 'column',
		borderRadius : '0',
		backgroundColor : '#f8f8f8 !important',
		borderShadow: '0px 0px 2px black'
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
		fontSize : isMobile ? '2.4rem' : '2rem'
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
			backgroundPositionX : this.props.imagePosX ? this.props.imagePosX : '50%',
			backgroundPositionY : this.props.imagePosY ? this.props.imagePosY : '70%'
		}

		let h = this.props.short ? '100px' : (isMobile ? '110px' : '125px')

		return (
			<Card className={classes.landscapeCard}
			      style={{ marginBottom : this.props.noMargin ? '0' : '2vh' }}
			      style={{ position : this.props.fixed ? 'fixed' : 'relative' }}
			>
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

