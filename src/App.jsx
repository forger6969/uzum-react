import React, { useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import { AppContext } from './AppContext'
import StatusBar from './Components/StatusBar'

const App = () => {

  const [isUzb, setLang] = useState(true)

  return (
    <div>
      <AppContext.Provider value={{
        language: {
          isUzb: isUzb,
          setLang: setLang
        }
      }}>
        <BrowserRouter>

          <StatusBar />

        </BrowserRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App