import type {User} from "../data/types"
import useUserStore from "../userStore"

export default async function fetchUsers(URL: string) {
	const setUsers = useUserStore.getState().setUsers

	const response = await fetch(URL)
	const data = (await response.json()) as User[]
	setUsers(data)
}
