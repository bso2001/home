import React from 'react'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'


const styling = theme => 
({
	detailCard :
	{
		marginBottom : '2vh',
		display : 'flex',
		backgroundColor : '#f8f8f8 !important',
		borderRadius : '0 !important'
	},

	imageContainer :
	{
		height: '12vh',
		width: '100%'
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
		marginTop: '1vh',
		marginBottom: '-1.5vh',
		fontWeight : '600'
	},

	description :
	{
		padding : '0 4vw 0 4vw',
		lineHeight: '1.4rem',
		textAlign : 'center'
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
				<Typography variant="h5"
					className={ classes.title }
					style={{ fontWeight : boldTitle ? '600' : '400' }}> {this.props.title}
				</Typography>
				<Typography variant="body1"
					className={ classes.description }
					color="textSecondary"
					dangerouslySetInnerHTML={{ __html: this.props.text }}>
				</Typography>
			</CardContent> </Card>
		)
	}
}


export default withStyles( styling, { withTheme: true } )( DetailCard )
