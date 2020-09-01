import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'


const styling = theme => 
({
	portraitCard :
	{
		width : '96% !important',
		marginLeft : '2% !important',
		height : '18vh !important',
		maxHeight : '18vh !important',
		marginBottom : '2vh',
		borderRadius : '2px !important',
		cursor : 'pointer !important'
	},

	imageContainer :
	{
		flex : '2',
		maxWidth : '25vh',
		height : '18vh',
		maxHeight : '18vh'
	},

	image :
	{
		height : '100%',
		width : '100%'
	},

	textbox :
	{
		flex : '3',
		display : 'flex',
		flexFlow : 'column',
		justifyContent : 'center',
		padding : '0 4vw 0 4vw'
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
					<Typography noWrap={true} variant="h6">{this.props.title}</Typography>
					<Typography noWrap={true} variant="body1" dangerouslySetInnerHTML={{ __html: this.props.text }} />
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
