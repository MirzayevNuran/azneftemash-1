import SearchIcon from '@mui/icons-material/Search'
import {
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	Typography,
} from '@mui/material'
import { ChangeEvent, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo/azneftemash.png'

import { navItems } from '../../utils/constant'
import { Item } from '../../utils/types'
import Lang from './Lang'
import './navbar.scss'
import NavItem from './NavItem'

const NavBar = () => {
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	const textColor = useMemo(
		() => (isHomePage ? '#fff' : 'rgb(25,63,105)'),
		[isHomePage]
	)
	const positionPage = useMemo(
		() => (isHomePage ? 'absolute' : 'relative'),
		[isHomePage]
	)

	const [searchTerm, setSearchTerm] = useState<string>('')

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	return (
		<Box
			className='mainBox'
			sx={{
				width: '100%',
				color: textColor,
				zIndex: 2,
				position: positionPage,
				top: 0,
				transition: 'background-color 0.3s ease-in-out',
				boxShadow: 'none',
			}}
		>
			<Container
				className='mainContainer'
				// maxWidth='xl'
				sx={{ display: 'flex', justifyContent: 'center' }}
			>
				<Box
					className='mainNavLists'
					sx={{ display: 'flex', alignItems: 'center' }}
				>
					<img className='navbarIMG' src={logo} alt='Azneftemash logo' />

					<Box className='mainList'>
						<Box className='topList'>
							<Typography variant='subtitle2' sx={{ color: textColor }}>
								sales@azneftemash.com
							</Typography>
							<Box className='navSearch'>
								<input
									type='search'
									placeholder='Search...'
									className='navSearchInput'
									value={searchTerm}
									onChange={handleSearch}
									aria-label='Search'
									autoComplete='off'
								/>
								<IconButton className='navSearchBTN' aria-label='Search button'>
									<SearchIcon className='navSearchIcon' />
								</IconButton>
							</Box>
							<Typography sx={{ color: textColor }}>
								(+99450) 250-12-20
							</Typography>
						</Box>

						<Divider sx={{ backgroundColor: 'rgb(25,63,105)', marginTop: 0 }} />

						<Box className='bottomList'>
							<Box className='navLists'>
								{navItems.map((item: Item) => (
									<NavItem key={item.route} item={item} textColor={textColor} />
								))}
							</Box>

							<Box className='bottomListLangContact'>
								<Lang />
								<Button
									sx={{
										backgroundColor: 'rgb(25,63,105)',
										height: '49px',
										color: '#fff',
										borderRadius: 0,
										transition:
											'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
									}}
								>
									Contact Us
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default NavBar
