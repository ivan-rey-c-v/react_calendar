import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('React-App'))

// register service-worker
serviceWorker.register()
