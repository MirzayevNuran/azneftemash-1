import { Route, Routes } from 'react-router'

import { About } from '../../pages/about/About'
import { Catalog } from '../../pages/catalog/Catalog'
import { Certificates } from '../../pages/certificates'
import Contacts from '../../pages/contact/Contact'
import Home from '../../pages/home/Home'
import { Progresses } from '../../pages/progresses/Progresses'
import NavBar from '../navbar/Navbar'

export default function MainPages() {
	return (
		<div style={{ position: 'relative' }}>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/ourprogresses' element={<Progresses />} />
				<Route path='/contact' element={<Contacts />} />
				<Route path='/certificates' element={<Certificates />} />
			</Routes>
		</div>
	)
}
