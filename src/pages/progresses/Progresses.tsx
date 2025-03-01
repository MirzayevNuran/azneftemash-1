import binaBir from '../../assets/img/bina1.jpg'
import binaIki from '../../assets/img/bina2.jpg'
import binaUc from '../../assets/img/bina3.jpg'
import happybabies from '../../assets/logo/happybabies_580x250.jpg'
import karvan from '../../assets/logo/karvan_580x250.jpg'
import { ItemImg } from '../../utils/types'
import './style.scss'

const dataProgresses: Array<ItemImg> = [
	{
		img: karvan,
		name: 'Karvan Football Club',
		number: 'Mob: +(994 50) 250 12 20',
		description: {
			text: 'Modern sports complex, sports club "Karvan" which belongs to the company. The in-depth information is official site karvan.az',
		},
	},
	{
		img: happybabies,
		name: 'HappyBabies',
		number: 'Phone: +994125144407',
		description: {
			web: 'happybabies-az.com',
			mail: 'E-mail: office@happybabies-az.com',
		},
	},
]

function Card({ item }: { item: ItemImg }) {
	return (
		<div className='mainCard'>
			<div>
				<img className='imgCard' src={item.img} alt={item.name} />
			</div>
			<div className='titleCard'>
				<h1>{item.name}</h1>
				{item.description?.text && <p>{item.description.text}</p>}
				{item.description?.web && (
					<p>
						Website:{' '}
						<a
							href={`https://${item.description.web}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							{item.description.web}
						</a>
					</p>
				)}
				{item.description?.mail && <p>{item.description.mail}</p>}
				{item.number && <p>{item.number}</p>}
			</div>
		</div>
	)
}

export const Progresses = () => {
	return (
		<div style={{ marginTop: '100px' }}>
			<div className='container'>
				{dataProgresses.map((item, index) => (
					<Card key={index} item={item} />
				))}
			</div>

			<div className='divImgBottom'>
				<img src={binaBir} alt='binaBir' />
				<img src={binaIki} alt='binaIki' />
				<img src={binaUc} alt='binaUc' />
			</div>
		</div>
	)
}
