// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import photo1 from '../../assets/img/1.jpg'
import photo2 from '../../assets/img/2.jpg'
import photo3 from '../../assets/img/3.jpg'
import photo4 from '../../assets/img/4.jpg'
import photo5 from '../../assets/img/5.jpg'

// Import Swiper styles
import 'swiper.css'

import './style.css'

const Photos: string[] = [photo1, photo2, photo3, photo4, photo5]

// import required modules
import { Autoplay } from 'swiper/modules'

export default function Carousel() {
	return (
		<div style={{ position: 'relative' }}>
			{/* <NavBar /> */}
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				navigation={true}
				modules={[Autoplay]}
				className='mySwiper'
			>
				{Photos.map((img, index) => (
					<SwiperSlide key={index}>
						<img src={img} alt={`Slide ${index + 1}`} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
