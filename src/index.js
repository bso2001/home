import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import * as serviceWorker from './library/serviceWorker'

import Century21Page from './pages/Century21'
import LandingPage from './pages/Landing'
import LastSummerPage from './pages/LastSummer'
import MusicPage from './pages/Music'
import PmitsPage from './pages/PMItS'
import ProvidencePage from './pages/Providence'
import ProvidenceFivePage from './pages/providence/Five'
import ProvidenceOnePage from './pages/providence/One'
import ProvidenceTwoPage from './pages/providence/Two'
import ProvidencePropheciesPage from './pages/providence/Prophecies'
import ProvidenceQuestionsPage from './pages/providence/Questions'
import SoloWorksPage from './pages/Solo'

const rootContent =
(
	<span>
		<Router>
			<Route exact path = "/" component = {LandingPage} />
			<Route path = "/century-21" component = {Century21Page} />
			<Route path = "/last-summer" component = {LastSummerPage} />
			<Route path = "/music" component = {MusicPage} />
			<Route path = "/pmits" component = {PmitsPage} />
			<Route path = "/providence" component = {ProvidencePage} />
			<Route path = "/providence-five" component = {ProvidenceFivePage} />
			<Route path = "/providence-prophecies" component = {ProvidencePropheciesPage} />
			<Route path = "/providence-questions" component = {ProvidenceQuestionsPage} />
			<Route path = "/providence-two" component = {ProvidenceTwoPage} />
			<Route path = "/providence-one" component = {ProvidenceOnePage} />
			<Route path = "/solo" component = {SoloWorksPage} />
		</Router>
	</span>
)

ReactDOM.render( rootContent, document.getElementById('rootContent') )

				// To allow the app to work offline and load faster, change unregister() to
				// register() below.  Note this comes with some pitfalls.
serviceWorker.register()
