import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import * as serviceWorker from './library/serviceWorker'

import ArtImitatesLifePage from './pages/gas-music/Art'
import Century21Page from './pages/c21/Main'
import CometPage from './pages/gas-music/Comet'
import CitiesPage from './pages/solo/Cities'
import FrontierPage from './pages/solo/Frontier'
import FunWithLightAndHeatPage from './pages/solo/Heat'
import GasMusicPage from './pages/gas-music/Main'
import HomePage from './pages/Home'
import ImagesPage from './pages/Images'
import LastSummerPage from './pages/c21/LastSummer'
import LoveAndMadnessPage from './pages/solo/Madness'
import MusicPage from './pages/Music'
import PhotosPage from './pages/Photos'
import PmitsPage from './pages/c21/PMItS'
import ProvidencePage from './pages/providence/Main'
import ProvidenceFivePage from './pages/providence/Five'
import ProvidenceOnePage from './pages/providence/One'
import ProvidenceTwoPage from './pages/providence/Two'
import ProvidencePropheciesPage from './pages/providence/Prophecies'
import ProvidenceQuestionsPage from './pages/providence/Questions'
import SoloWorksPage from './pages/solo/Main'
import SongsOfTheLastSwanPage from './pages/solo/Swan'
import WebcamsPage from './pages/Webcams'

const rootContent =
(
	<span>
		<Router>
			<Route exact path = "/" component = {HomePage} />
			<Route path = "/art" component = {ArtImitatesLifePage} />
			<Route path = "/century-21" component = {Century21Page} />
			<Route path = "/cities" component = {CitiesPage} />
			<Route path = "/comet" component = {CometPage} />
			<Route path = "/frontier" component = {FrontierPage} />
			<Route path = "/gas-music" component = {GasMusicPage} />
			<Route path = "/heat" component = {FunWithLightAndHeatPage} />
			<Route path = "/images" component = {ImagesPage} />
			<Route path = "/last-summer" component = {LastSummerPage} />
			<Route path = "/madness" component = {LoveAndMadnessPage} />
			<Route path = "/music" component = {MusicPage} />
			<Route path = "/photos" component = {PhotosPage} />
			<Route path = "/pmits" component = {PmitsPage} />
			<Route path = "/providence" component = {ProvidencePage} />
			<Route path = "/providence-five" component = {ProvidenceFivePage} />
			<Route path = "/prophecies" component = {ProvidencePropheciesPage} />
			<Route path = "/questions" component = {ProvidenceQuestionsPage} />
			<Route path = "/providence-two" component = {ProvidenceTwoPage} />
			<Route path = "/providence-one" component = {ProvidenceOnePage} />
			<Route path = "/solo" component = {SoloWorksPage} />
			<Route path = "/swan" component = {SongsOfTheLastSwanPage} />
			<Route path = "/webcams" component = {WebcamsPage} />
		</Router>
	</span>
)

ReactDOM.render( rootContent, document.getElementById('rootContent') )

				// To allow the app to work offline and load faster, change unregister() to
				// register() below.  Note this comes with some pitfalls.
serviceWorker.register()
