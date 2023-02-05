export class UserService {
	users = [
		{
			name: "Hiten",
			birthDate: "23/01/1997",
			contacts: [
				{
					contactName: "Mummy",
					contactNumber: 9485959221
				},
				{
					contactName: "Pappa",
					contactNumber: 8982730419
				}
			]
		}
	]

	onRegister (user: {firstName: string, lastName: string, birthDate: string}) {
		const fullName = user.firstName + ' ' + user.lastName;
		this.users.push(
			{
				name: fullName,
				birthDate: user.birthDate,
				contacts: []
			}
		)
	}

	addContact (id: number, contact: {contactName: string, contactNumber: number}) {
		this.users[id].contacts.push({
			contactName: contact.contactName,
			contactNumber: contact.contactNumber
		})
	}
}