import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'


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
		fontWeight : '600'
	},

	description :
	{
		padding : '0 4vw 0 4vw',
		textAlign : 'justify'
	}
})


class DetailCard extends React.Component
{
	render()
	{
		const { classes } = this.props

		return (
			<Card className={classes.detailCard}> <CardContent>
				<div className={classes.imageContainer}>
					<div className={classes.image} style={{ background: 'url(' + this.props.image + ')' }} alt=""></div>
				</div>
				<Typography variant="h5" className={classes.title}>{ this.props.title }</Typography>
				<Typography variant="body1" className={classes.description} color="textSecondary"
											dangerouslySetInnerHTML={{ __html: this.props.text }} />
			</CardContent> </Card>
		)
	}
}


export default withStyles( styling, { withTheme: true } )( DetailCard )
