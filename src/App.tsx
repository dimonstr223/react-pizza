import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Cart from './pages/Cart'
import FullPizza from './pages/FullPizza'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import './scss/app.scss'

function App() {
	return (
		<Routes>
			<Route path='react-pizza/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='/react-pizza/cart' element={<Cart />} />
				<Route path='/react-pizza/pizza/:id' element={<FullPizza />} />
				<Route path='react-pizza/*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}
export default App
