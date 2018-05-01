import React from 'react'
import ReactDOM from 'react-dom'
import './styles/compiled/app.css'
import App from './pages/App'
import registerServiceWorker from './bootstrap/registerServiceWorker'

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
