import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import { AppContext } from './AppContext'
import HomePage from './Pages/HomePage'
import StatusBar from './Components/StatusBar'
import Nav from './Components/Nav'
import CartPage from './Pages/CartPage'
import ProductAbout from './Pages/ProductAbout'
import NotFoundPage from './Pages/NotFoundPage'

const App = () => {

  const getCart = JSON.parse(localStorage.getItem('productBasket'))

  const [isUzb, setLang] = useState(true)
  const [auth, setAuth] = useState({})
  const [cartArr, setCart] = useState(getCart || [])
  const [filter, setFilter] = useState('')

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
          setUser: setAuth,
        },
        cart: {
          cartArray: cartArr,
          setCart: setCart
        }
      }}>
        <BrowserRouter>

          <StatusBar />
          <Nav setFilter={setFilter} />

          <Routes>
            <Route path='/' element={<HomePage filter={filter} />} />
            <Route path='/CartPage' element={<CartPage />} />
            <Route path='/ProductAbout/:id' element={<ProductAbout />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>

        </BrowserRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App