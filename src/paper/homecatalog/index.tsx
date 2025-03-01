import { Box, Typography } from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { itemCatalog } from '../../utils/constant'
import './style.scss'

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	}
}

export default function QuiltedImageList() {
	const isHomePage = location.pathname === '/'

	return (
		<Box
			sx={{
				margin: '0 auto',
				color: '#1d398d',
			}}
			className='catImg'
		>
			{!isHomePage ? null : (
				<Typography
					sx={{ paddingBottom: '30px', textAlign: 'center' }}
					variant='h3'
				>
					Azneftemash Photos
				</Typography>
			)}

			<ImageList variant='quilted' cols={4} rowHeight={130}>
				{itemCatalog.map(item => (
					<ImageListItem
						key={item.img}
						cols={item.cols || 1}
						rows={item.rows || 1}
					>
						<img
							{...srcset(item.img, 121, item.rows, item.cols)}
							alt={item.title}
							loading='lazy'
							className='imgZoom'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	)
}
