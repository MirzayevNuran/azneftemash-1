import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Item } from '../../utils/types'
import './navbar.scss'

interface NavItemProps {
	item: Item
	textColor: string
}

const NavItem: React.FC<NavItemProps> = ({ item, textColor }) => {
	return (
		<>
			<Button
				component={Link}
				to={item.route}
				sx={{
					display: { xs: 'none', md: 'flex' },
					marginRight: '20px',
					color: textColor,
					fontSize: '13px',
					'&:last-child': {
						marginRight: 0,
						paddingRight: 0,
					},
				}}
			>
				{item.title}
			</Button>
		</>
	)
}

export default NavItem
