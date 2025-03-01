import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Link } from 'react-router'
import logo from '../../assets/logo/azneftemash.png'
import './style.scss'

export const Footer = () => {
	return (
		<div className='bodyFooter'>
			<footer>
				{/* <article>
					<h2>Try Hologram today.</h2>
					<button>
						<p>Sign up free</p>
						<span className='material-symbols-outlined'> trending_flat </span>
					</button>
				</article> */}

				<section className='top'>
					{/* <img src={logo} alt='logo' /> */}
					<ul>
						<li>
							<span className='spanLocation'>
								<LocationOnIcon className='iconLocation' />

								<h3>ADRESS / MAP</h3>
							</span>
							<br />
							<Link
								target='_blank'
								to='https://www.google.com/maps/place/Azneftemash+ASC/@40.768096,47.0182478,17z/data=!3m1!4b1!4m6!3m5!1s0x4038c10058793dbb:0xb3f9a8bedf655581!8m2!3d40.768092!4d47.0208227!16s%2Fg%2F11vr_n9nd6?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
								className='linkLocation'
							>
								Mingachevir, Azerbaijan
							</Link>
							<img src={logo} alt='logo' />
						</li>
						<li>
							<h3>Company</h3>
							<br />
							<Link className='link_A' target='_blank' to='/about'>
								About us
							</Link>
							<Link className='link_A' target='_blank' to='/certificates'>
								Certificates
							</Link>
						</li>
						<li>
							<h3>Products and Service</h3>
							<br />

							<Link className='link_A' to='/catalog'>
								Catalog
							</Link>
							<Link className='link_A' to='/ourprogresses'>
								Our Progresses
							</Link>
						</li>
						<li>
							<h3>Contact</h3>
							<br />
							<p className='link_A'>Phone: (+99412) 514-88-00</p>
							<p className='link_A'>Mob:(+99450) 250-12-20</p>
							<p className='link_A'>E-mail: office@azneftemash.az</p>
							<p className='link_A'>E-mail: azneftemash@gmail.com</p>
						</li>
						<li>
							<h3>More about azneftemash</h3>
							<br />
							<span className='socials'>
								<Link
									to='https://www.instagram.com/azneftemash/'
									target='_blank'
								>
									<InstagramIcon
										sx={{ width: '35px', height: '35px' }}
										className='socialsIcons'
									/>
								</Link>
								<Link to='https://www.facebook.com/Azneftemash' target='_blank'>
									<FacebookIcon
										sx={{ width: '35px', height: '35px' }}
										className='socialsIcons'
									/>
								</Link>
								<Link
									to='https://www.youtube.com/@SelimhanovAdil'
									target='_blank'
								>
									<YouTubeIcon
										sx={{ width: '40px', height: '40px' }}
										className='socialsIcons'
									/>
								</Link>
							</span>
						</li>
					</ul>
				</section>
				{/* <section className='socials'>
					<Link to='https://www.instagram.com' target='_blank'>
						<InstagramIcon
							sx={{ width: '35px', height: '35px' }}
							className='socialsIcons'
						/>
					</Link>
					<Link to='https://www.facebook.com' target='_blank'>
						<FacebookIcon
							sx={{ width: '35px', height: '35px' }}
							className='socialsIcons'
						/>
					</Link>
					<Link to='https://www.youtube.com' target='_blank'>
						<YouTubeIcon
							sx={{ width: '40px', height: '40px' }}
							className='socialsIcons'
						/>
					</Link>
				</section> */}

				<section className='bottom'>© 2025 Nuran Mirzayev</section>
			</footer>
		</div>
	)
}
