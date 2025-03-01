// import Carousel from '../../components/carousel'
import { Video } from '../../components/video'
import { HomeAboutUs } from '../../paper/homeaboutus'
import QuiltedImageList from '../../paper/homecatalog'

const Home = () => {
	return (
		<div className='containerHome'>
			{/* <Carousel /> */}
			<Video />
			<HomeAboutUs />
			<QuiltedImageList />
		</div>
	)
}

export default Home
