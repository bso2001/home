
import React from 'react'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

const styling = theme => 
({
	plainCard :
	{
		width : '100%',
		display : 'flex',
		flexFlow : 'column',
		borderRadius : '4px 4px 0 0',
		backgroundColor : '#3f3f3f !important'
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
		fontSize : '2rem',
		color : '#fff'
	}
})

class PlainCard extends React.Component
{
	render()
	{
		const { classes } = this.props

		return (
			<Card className={classes.plainCard}>
			    <CardContent>
				<Typography variant={isMobile ? `body1` : `h5`} className={classes.text}
										dangerouslySetInnerHTML={{ __html: this.props.text }} />
			    </CardContent>
			</Card>
		)
	}
}

export default withStyles( styling, { withTheme: true } )( PlainCard )

