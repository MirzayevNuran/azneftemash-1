import { Box, Typography } from '@mui/material'
import { Link } from 'react-router'
import report from '../../assets/logo/icon.png'

export const Certificates = () => {
	return (
		<Box sx={{ height: '50.4vh' }}>
			<Typography
				variant='h2'
				sx={{ color: '#1d398d', marginTop: '20px', textAlign: 'center' }}
			>
				Azneftemash Financial Report
			</Typography>
			<Box className='reportBox'>
				<Link
					target='_blank'
					to='https://azneftemash.com/Azneftemash%20Financial%20Report%202020%20(az).pdf'
				>
					<span className='reportSpan'>
						<img className='reportIcon' src={report} alt='report' />
						<p className='report_p'>For 2020</p>
					</span>
				</Link>
				<Link
					target='_blank'
					to='https://azneftemash.com/Azneftemash%20Financial%20Report%202021%20(az).pdf'
				>
					<span className='reportSpan'>
						<img className='reportIcon' src={report} alt='report' />
						<p className='report_p'>For 2021</p>
					</span>
				</Link>
				<Link
					target='_blank'
					to='https://azneftemash.com/Azneftemash%20Financial%20Report%202022%20(az).pdf'
				>
					<span className='reportSpan'>
						<img className='reportIcon' src={report} alt='report' />
						<p className='report_p'>For 2022</p>
					</span>
				</Link>
				<Link
					target='_blank'
					to='https://azneftemash.com/Azneftemash%20Financial%20Report%202023%20(az).pdf'
				>
					<span className='reportSpan'>
						<img className='reportIcon' src={report} alt='report' />
						<p className='report_p'>For 2023</p>
					</span>
				</Link>
			</Box>
		</Box>
	)
}
