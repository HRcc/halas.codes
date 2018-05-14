import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import './styles/compiled/app.css'
import App from './pages/App'
import registerServiceWorker from './bootstrap/registerServiceWorker'

ReactGA.initialize('UA-36731267-7')

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
