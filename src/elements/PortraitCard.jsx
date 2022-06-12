
import React from 'react'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

const styling =(theme)=> 
({
	portraitCard :
	{
		flex : '1',
		margin : '10% auto 10% auto !important',
		width : isMobile ? '90%' : '80%',
		minHeight : isMobile ? '80px' : '120px',
		maxHeight : '10rem',
		cursor : 'pointer !important',
		borderRadius : '0'
	},

	image :
	{
		flex : '1',
		backgroundSize : 'cover',
		backgroundPositionY : 'bottom',
		minWidth : '40%'
	},

	textbox :
	{
		padding : '0 2% 0 2%',
		display : 'flex',
		width : '55%',
		marginBottom: '10px',
		flexDirection: 'column',
		justifyContent: 'center'
	},

	title :
	{
		fontFamily : 'serenity, sans-serif !important',
		fontSize : '2rem',
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
				<div className={classes.image} style={{ backgroundImage : `url(${this.props.image}` }}>
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

