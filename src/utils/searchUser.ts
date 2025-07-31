import useUserStore from "../userStore"

export function searchUser() {
	const users = useUserStore(state => state.users),
	  	  search = useUserStore(state => state.search);

	return users.filter(user => {
		const query = search.toLowerCase(),
			name = user.name.toLowerCase(),
			email = user.email.toLowerCase()

		return name.includes(query) || email.includes(query)
	})
}