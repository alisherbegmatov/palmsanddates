import React, { useEffect, useState } from 'react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom'

import './assets/scss/custom.scss'
import './assets/css/general.css'

import NavBar from './Navbar/NavBar'
import EventList from './EventList/EventList'
import LogIn from './LogIn/LogIn'
import CreateEvent from './CreateEvent/CreateEvent'
import Footer from './Footer/Footer'
import EventDetail from './EventDetail/EventDetail'

import AuthService from './services/auth.service'
import tokenPayload from './services/token-payload'

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App () {
  const [modalLogin, setModalLogin] = useState(false)
  const [modalCreateEvent, setModalCreateEvent] = useState(false)
  const [authentification, setAuthentification] = useState(false)

  const token = tokenPayload()

  useEffect(() => {
    if (Object.keys(token).length) {
      if (token.exp * 1000 >= Date.now()) {
        setAuthentification(true)
        setInterval(() => {
          AuthService.logout()
          setAuthentification(false)
        }, token.exp * 1000 - Date.now())
      } else {
        AuthService.logout()
      }
    }
  }, [token])

  return (
    <Provider store={store}>
       <Router>
        <div className='App'>
          <header className='App-header'>
            <NavBar
              setModalLogin={setModalLogin}
              setModalCreateEvent={setModalCreateEvent}
              authentification={authentification}
              setauthentification={setAuthentification}
            />
            <LogIn
              setauthentification={setAuthentification}
              show={modalLogin}
              onHide={() => setModalLogin(false)}
            />
            <Route exact path='/' component={EventList} />
            <Route path='/events/:eventId' component={EventDetail} />
            <CreateEvent
              show={modalCreateEvent}
              onHide={() => setModalCreateEvent(false)}
            />
          </header>
          <Footer />
      </div>
    </Router>
    </Provider>
  )
}

export default App
