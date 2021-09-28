
import React from 'react'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

const styling = theme => 
({
	detailCard :
	{
		marginBottom : '2%',
		display : 'flex',
		backgroundColor : '#f8f8f8 !important'
	},

	imageContainer :
	{
		width : '100%',
		height : isMobile ? '120px' : '180px',
	},

	image :
	{
		backgroundSize : 'cover !important',
		backgroundRepeat : 'no-repeat !important',
		height : '100%'
	},

	title : 
	{
		textAlign : 'center',
		marginTop : '1em',
		color : '#464646',
		fontFamily : 'arboria-book, sans-serif !important',
		fontSize : `${isMobile ? '2.2' : '1.6'}rem !important`,
	},

	description :
	{
		marginTop : '1em',
		marginLeft : isMobile ? '5%' : '10%',
		marginRight : isMobile ? '5%' : '10%',
		fontFamily : 'raleway, sans-serif !important',
		fontWeight : 500,
		fontSize : `${isMobile ? '1.5' : '1'}rem`,
		letterSpacing : `${isMobile ? '-.5' : '1'}px`,
		color : '#585858'
	}
})

class DetailCard extends React.Component
{
	render()
	{
		const { classes } = this.props

		let imgStyle = { background : 'url(' + this.props.image + ')' }
		if ( this.props.imagePos )
			imgStyle['backgroundPositionY'] = this.props.imagePos

		let boldTitle = (this.props.boldTitle !== undefined) ? this.props.boldTitle : true

		return (
			<Card className={ classes.detailCard }> <CardContent>
				<div className={ classes.imageContainer }>
					<div className={classes.image} style={imgStyle}> </div>
				</div>
				<Typography variant="h5" className={ classes.title } > {this.props.title} </Typography>
				<Typography 
					className={ classes.description }
					color="textSecondary"
					dangerouslySetInnerHTML={{ __html: this.props.text }}>
				</Typography>
			</CardContent> </Card>
		)
	}
}

export default withStyles( styling, { withTheme: true } )( DetailCard )

