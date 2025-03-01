// import { useTranslation } from 'react-i18next'
import './App.scss'
import MainPages from './components/main/MainPages'
import { Footer } from './paper/footer'
// import NavBar from './components/navbar/Navbar'

function App() {
	// const { t } = useTranslation()

	// return <h2>{t('Welcome to React')}</h2>
	return (
		<>
			{/* <NavBar /> */}
			<MainPages />
			<Footer />
		</>
	)
}

export default App
