import {
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Typography,
} from '@mui/material'
import { itemIMG } from '../../utils/constant'
import './style.scss'

export const HomeAboutUs = () => {
	return (
		<div className='containerAboutUs'>
			<Typography variant='h2' sx={{ marginTop: '20px', textAlign: 'center' }}>
				"Azneftemash" OJSC was established in 1953.
			</Typography>
			<Typography variant='subtitle1' className='mainAboutBottom'>
				After becoming Joint Stock Company in 1999 our enterprise has been
				producting equipments applied in the oil and gas industry: lifting
				gears; high-pressure gates, techniques of special mission and variours
				instruments with high quality. 980 employers are working for the plant.
				The equipments are used in the oil and gas industry of the Republic of
				Azerbaijan and CIS countries. The equipments, which are in use, have
				been installed in accordance with requirements of oil workers. Alongside
				main production arears there is steel plant and laboratory meeting with
				the modern standards in the enterprise. Our enterprise carries out works
				to create competitive and qualitative equipments in order the world
				market. We are ready to collaborate with You! Best regards, Shahmar
				Rustam Valiyev president of "Azneftemash" OJSC
			</Typography>
			<ImageList className='imgList' sx={{ margin: '20px 0' }}>
				{itemIMG.map(item => (
					<ImageListItem key={item.img}>
						<img
							srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.img}?w=248&fit=crop&auto=format`}
							alt={item.name}
							loading='lazy'
						/>
						<ImageListItemBar
							title={item.name}
							subtitle={item.position}
							sx={{ color: 'white' }}
						/>
					</ImageListItem>
				))}
			</ImageList>

			{/* TODO: Financial Report for date 20,21,22,23  */}
			{/* <div className='mainAboutTop'>
				<div>
					<div className='mainAboutTopImg'></div>
					<p>
						{' '}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
						repellendus beatae nihil autem magni repellat minus iste,
						accusantium error eum laudantium qui ipsum vel eveniet consequatur
						provident porro distinctio inventore.
					</p>
				</div>
				<div>
					<div className='mainAboutTopImg'></div>
					<p>
						{' '}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
						repellendus beatae nihil autem magni repellat minus iste,
						accusantium error eum laudantium qui ipsum vel eveniet consequatur
						provident porro distinctio inventore.
					</p>
				</div>
			</div> */}

			{/* <TitlebarImageList /> */}
		</div>
	)
}
