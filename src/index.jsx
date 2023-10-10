import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import * as serviceWorker from './library/serviceWorker'

import HomePage from './pages/Home'
import Menu from './elements/Menu'

const App = () => (
	<span>
	    <Menu />
	    <Router>
		<Route exact path = "/" component = {HomePage} />
	    </Router>
	</span>
)

ReactDOM.render( <App />, document.getElementById( 'appContainer' ) )

				// To allow the app to work offline and load faster, change unregister() to
				// register() below.  Note this comes with some pitfalls.
serviceWorker.unregister()
