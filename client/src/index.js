import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { AuthProviderWrapper } from './context/auth.context'
import { MessageProviderWrapper } from './context/userMessage.context'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

ReactDOM.render(
  <MessageProviderWrapper>
    <AuthProviderWrapper>
      <Router>
        <App />
      </Router>
    </AuthProviderWrapper>
  </MessageProviderWrapper>,
  document.getElementById('root')
)