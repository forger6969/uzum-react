import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import { AppContext } from './AppContext'
import StatusBar from './Components/StatusBar'
import Nav from './Components/Nav'
import HomePage from './Pages/HomePage'

const App = () => {


  const [isUzb, setLang] = useState(true)
  const [auth, setAuth] = useState({})

  useEffect(() => {
    if (localStorage.getItem(`currentUser`)) {
      const userStorage = JSON.parse(localStorage.getItem(`currentUser`))
      setAuth(userStorage)
    }
  }, [])


  return (
    <div>
      <AppContext.Provider value={{
        language: {
          isUzb: isUzb,
          setLang: setLang
        },
        auth: {
          user: auth,
          setUser: setAuth
        }
      }}>
        <BrowserRouter>

          <HomePage />

        </BrowserRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App