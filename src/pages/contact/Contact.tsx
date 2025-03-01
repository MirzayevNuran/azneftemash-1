import contactsData from './contacts.json'
import './style.scss'

export const Contacts = () => {
	return (
		<div className='contacts-container'>
			{/* Контакты */}
			<div className='contacts-section'>
				<h2>Contact us</h2>
				<table className='contacts-table'>
					<tbody>
						{contactsData.contacts.map((contact, index) => (
							<tr key={index}>
								<td>{contact.title}</td>
								<td>
									{contact.phone && <span>{contact.phone}</span>}
									{contact.address && <span>{contact.address}</span>}
									{contact.email && (
										<span>
											{contact.email.split(', ').map((mail, i) => (
												<a key={i} href={`mailto:${mail}`}>
													{mail}
												</a>
											))}
										</span>
									)}
									{contact.website && (
										<a
											href={`https://${contact.website}`}
											target='_blank'
											rel='noopener noreferrer'
										>
											{contact.website}
										</a>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Координаты */}
			<div className='coordinates-section'>
				<h2>Coordinates</h2>
				<p>
					<strong>Address:</strong> {contactsData.coordinates.address}
				</p>
				<p>
					<strong>Phone:</strong> {contactsData.coordinates.phones.join(', ')}
				</p>
				<p>
					<strong>Fax:</strong> {contactsData.coordinates.fax}
				</p>
				<p>
					<strong>Mobile:</strong> {contactsData.coordinates.mob}
				</p>
				<p>
					<strong>Email:</strong>{' '}
					{contactsData.coordinates.emails.map((email, index) => (
						<a key={index} href={`mailto:${email}`}>
							{email}
						</a>
					))}
				</p>
				<p>
					<strong>Website:</strong>{' '}
					<a
						href={`https://${contactsData.coordinates.website}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						{contactsData.coordinates.website}
					</a>
				</p>
			</div>

			{/* Филиалы */}
			<div className='branches-section'>
				<h2>Filials "Azneftemash"</h2>
				<table className='branches-table'>
					<tbody>
						{contactsData.branches.map((branch, index) => (
							<tr key={index}>
								<td>
									<strong>{branch.name}</strong>
								</td>
								<td>
									{branch.director && <p>Director: {branch.director}</p>}
									{branch.phone && <p>Phone: {branch.phone}</p>}
									{branch.fax && <p>Fax: {branch.fax}</p>}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Contacts
