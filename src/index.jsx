import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import * as serviceWorker from './library/serviceWorker'

import HomePage from './pages/Home'
import ImagesPage from './pages/Images'
import MusicPage from './pages/Music'
import PhotosPage from './pages/Photos'
import WebcamsPage from './pages/Webcams'

import Menu from './elements/Menu'

const App = () => (
	<span>
	    <Menu />
	    <Router>
		<Route exact path = "/" component = {HomePage} />
		<Route path = "/images" component = {ImagesPage} />
		<Route path = "/music" component = {MusicPage} />
		<Route path = "/photos" component = {PhotosPage} />
		<Route path = "/webcams" component = {WebcamsPage} />
	    </Router>
	</span>
)

ReactDOM.render( <App />, document.getElementById( 'appContainer' ) )

				// To allow the app to work offline and load faster, change unregister() to
				// register() below.  Note this comes with some pitfalls.
serviceWorker.unregister()
