import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import videoBg from '../../assets/video/AZNEFTEMASH Завод.mp4'
import './style.scss'
export const Video = () => {
	return (
		<div className='mainVideo'>
			<div className='overlay'></div>
			<video src={videoBg} autoPlay loop muted />
			<span className='videoContent'>
				<ArrowDownwardIcon sx={{ width: '70px', height: '70px' }} />
				<h2>scroll down</h2>
			</span>
		</div>
	)
}
