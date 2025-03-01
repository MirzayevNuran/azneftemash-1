import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LanguageIcon from '@mui/icons-material/Language'
import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useLocation } from 'react-router-dom'
// import { Menu } from '@mui/material'
import './navbar.scss'

const languages = [
	{ code: 'az', lang: 'AZ', icon: 'AZ' },
	{ code: 'ru', lang: 'RU', icon: 'RU' },
	{ code: 'en', lang: 'EN', icon: 'GB' },
]

const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'left',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 90,
		color: 'rgb(55, 65, 81)',
		boxShadow:
			'rgba(255, 255, 255, 1) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			fontSize: '16px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			padding: '8px 16px',
			gap: '8px', // Расстояние между флагом и текстом
		},
	},
}))

export default function Lang() {
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div style={{ margin: '2px 20px' }}>
			<Button
				id='demo-customized-button'
				aria-controls={open ? 'demo-customized-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				variant='contained'
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
				sx={{
					height: '49px',
					backgroundColor: 'transparent',
					color: isHomePage ? '#fff' : 'rgb(25,63,105)',
					transition: 'color 0.3s ease-in-out',
				}}
			>
				<LanguageIcon />
			</Button>
			<StyledMenu
				id='demo-customized-menu'
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				{languages.map(lng => (
					<MenuItem key={lng.code} onClick={handleClose} disableRipple>
						<ReactCountryFlag
							title={lng.lang}
							countryCode={lng.icon}
							svg
							style={{
								width: '20px',
								height: '15px',
								objectFit: 'cover',
							}}
						/>
						<span style={{ fontWeight: '500' }}>{lng.lang}</span>
					</MenuItem>
				))}
			</StyledMenu>
		</div>
	)
}

// const languages = [
// 	{ code: 'az', lang: 'AZ', icon: 'AZ' },
// 	{ code: 'ru', lang: 'RU', icon: 'RU' },
// 	{ code: 'en', lang: 'EN', icon: 'GB' },
// ]

// export const Lang = () => {
// 	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
// 	const open = Boolean(anchorEl)

// 	const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
// 		setAnchorEl(event.currentTarget)
// 	}

// 	const handleClose = () => {
// 		setAnchorEl(null)
// 	}

// 	return (
// 		<div
// 			onMouseEnter={handleOpen}
// 			onMouseLeave={handleClose}
// 			style={{ display: 'inline-block' }}
// 		>
// 			<Button>
// 				<LanguageIcon />
// 			</Button>
// 			<Menu
// 				anchorEl={anchorEl}
// 				open={open}
// 				onClose={handleClose}
// 				MenuListProps={{ onMouseLeave: handleClose }}
// 			>
// 				{languages.map(lng => (
// 					<MenuItem key={lng.code} onClick={handleClose} disableRipple>
// 						<ReactCountryFlag
// 							title={lng.lang}
// 							countryCode={lng.icon}
// 							svg
// 							style={{
// 								width: '20px',
// 								height: '15px',
// 								marginRight: '8px',
// 							}}
// 						/>
// 						<span style={{ fontWeight: '500' }}>{lng.lang}</span>
// 					</MenuItem>
// 				))}
// 			</Menu>
// 		</div>
// 	)
// }
