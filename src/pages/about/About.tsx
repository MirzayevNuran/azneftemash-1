import { Box, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
// import videoTest from 'www.youtube.com/watch?v=v0TJkwSaGeQ'
import birlik from '../../assets/logo/birlik_b.jpg'
import { HomeAboutUs } from '../../paper/homeaboutus'
import QuiltedImageList from '../../paper/homecatalog'
import { Certificates } from '../certificates'
import './about.scss'

export const About = () => {
	const isHomePage = location.pathname === '/'
	return (
		<div className='containerAbout'>
			{isHomePage ? null : (
				<div>
					<HomeAboutUs />
					<img className='aboutBirlikImg' src={birlik} alt='birlik' />
					<Certificates />

					<Typography
						variant='h2'
						sx={{ margin: '30px 0', textAlign: 'center' }}
					>
						Azneftemash Photos
					</Typography>
					<QuiltedImageList />
					<Typography
						variant='h2'
						sx={{ margin: '30px 0', textAlign: 'center' }}
					>
						Azneftemash Videos
					</Typography>
					<Box className='boxVideo'>
						<ReactPlayer
							width={500}
							height={300}
							style={{ margin: '0 auto' }}
							url='https://www.youtube.com/watch?v=v0TJkwSaGeQ'
						/>
						<ReactPlayer
							width={500}
							height={300}
							style={{ margin: '0 auto' }}
							url='https://youtu.be/_GpOSVdYNpM'
						/>
						<ReactPlayer
							width={500}
							height={300}
							style={{ margin: '0 auto' }}
							url='https://youtu.be/GD-Ytj52Ap8'
						/>
						<ReactPlayer
							width={500}
							height={300}
							style={{ margin: '0 auto' }}
							url='https://youtu.be/-RaeUkW3gkI'
						/>
						<ReactPlayer
							width={500}
							height={300}
							style={{ margin: '0 auto' }}
							url='https://youtu.be/sU0GHGvGfSU'
						/>
						<ReactPlayer
							width={500}
							height={300}
							style={{ margin: '0 auto' }}
							url='https://youtu.be/ZVMjCV480_8'
						/>
					</Box>
				</div>
			)}
		</div>
	)
}
