import {Link, useLocation} from "react-router-dom"
import type {User} from "../data/types"
import stl from "./User.module.css"

function UserPage() {
	const location = useLocation()
	const user = location.state.user as User

	return (
		<div className={stl.user}>
			<ul className={stl.user__list}>
				<li>Name: {user.name}</li>
				<li>Username: {user.username}</li>
				<li>E-mail: {user.email}</li>
				<li>Adrdress: {user.address.city}, {user.address.street}
					, {user.address.suite}, {user.address.zipcode}
				</li>
			</ul>
			<Link to="/users" className={stl.user__back}>Назад</Link>
		</div>
	)
}

export default UserPage