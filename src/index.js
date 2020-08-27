import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import * as serviceWorker from './library/serviceWorker'

import LandingPage from './pages/Landing'
import MusicPage from './pages/Music'
import ProvidencePage from './pages/Providence'
import ProvidenceFivePage from './pages/providence/Five'

const rootContent =
(
	<Router>
		<Route exact path = "/" component = {LandingPage} />
		<Route path = "/music" component = {MusicPage} />
		<Route path = "/providence" component = {ProvidencePage} />
		<Route path = "/providence-five" component = {ProvidenceFivePage} />
	</Router>
)

ReactDOM.render( rootContent, document.getElementById('rootContent') )

				// If you want your app to work offline and load faster, you can change
				// unregister() to register() below. Note this comes with some pitfalls.
				// Learn more about service workers: https://bit.ly/CRA-PWA [301'ed]
serviceWorker.register()
