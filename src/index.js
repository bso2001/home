import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import LandingPage from './pages/Landing'

import * as serviceWorker from './library/serviceWorker'

ReactDOM.render( <React.StrictMode> <LandingPage /> </React.StrictMode>, document.getElementById('rootContent') )

				// If you want your app to work offline and load faster, you can change
				// unregister() to register() below. Note this comes with some pitfalls.
				// Learn more about service workers: https://bit.ly/CRA-PWA [301'ed]
serviceWorker.register()
