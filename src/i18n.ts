import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import './index.css'

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	// passes i18n down to react-i18next
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		resources: {
			en: {
				translation: {
					'Welcome to React': 'Welcome to React and react-i18next',
				},
			},
		},
		lng: 'az', // if you're using a language detector, do not define the lng option
		fallbackLng: 'en',
		detection: {
			order: ['querystring', 'cookie', 'localStorage', 'path', 'subdomain'],
			caches: ['cookie'],
		},
		interpolation: {
			escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		},
	})

// function App() {
// 	const { t } = useTranslation()

// 	return <h2>{t('Welcome to React')}</h2>
// }
