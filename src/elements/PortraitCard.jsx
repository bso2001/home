
import React from 'react'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

const styling =(theme)=> 
({
	portraitCard :
	{
		margin : '2% auto 2% auto !important',
		width : '88%',
		height : isMobile ? '100px' : '200px',
		cursor : 'pointer !important'
	},

	imageContainer :
	{
		width : '45%'
	},

	image :
	{
		height : '100%',
		width : '100%',
		objectFit : 'cover'
	},

	textbox :
	{
		padding : '0 4% 0 4%',
		display : 'flex',
		width : '55%',
		height : '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignSelf: 'center'
	},

	title :
	{
		fontFamily : 'serenity, sans-serif !important',
		fontSize : isMobile ? '2rem' : '1.8rem',
		fontWeight: 300,
		lineHeight : '2rem'
	},

	text :
	{
		fontSize : isMobile ? '1.6rem' : '1.4rem',
		fontFamily : 'omnes-cyrillic-semicondensed, sans-serif !important',
		fontWeight: 300
	}
})

class PortraitCard extends React.Component
{
	render()
	{
		const { classes } = this.props

		return (
			<Card className={classes.portraitCard} id="portraitCard" onClick={ () => this.cardClicked() }>
			    <CardContent style={{ flexDirection : this.props.reverse ? 'row-reverse' : 'initial' }}>
				<div className={classes.imageContainer} style={{ backgroundColor : this.props.imageBg }}>
					<img className={classes.image} src={this.props.image} alt="" />
				</div>
				<div className={classes.textbox} style={{ textAlign : this.props.reverse ? 'right' : 'left' }}>
					<Typography className={classes.title} noWrap={true} variant="h6">{this.props.title}</Typography>
					<Typography className={classes.text} noWrap={true} variant="body1"
										dangerouslySetInnerHTML={{ __html: this.props.text }} />
				</div>
			    </CardContent>
			</Card>
		)
	}

	cardClicked()
	{
		if ( this.props.link )
			window.top.location = this.props.link

		else if ( this.props.href )
			window.open( this.props.href, "_blank" )
	}
}

export default withStyles( styling, { withTheme: true } )( PortraitCard )

