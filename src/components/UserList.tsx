import {Link} from "react-router-dom"
import {searchUser} from "../utils/searchUser"

function UserList() {

	return (
		<div className="user">
			{searchUser().map(user => (
				<div className="user__body" key={user.id}>
					<Link to={`/users/${user.username}`} state={{user: user}} className="user__name">
						<p>{user.name}</p>
					</Link>
					<p className="user__email">{user.email}</p>
				</div>
			))}
		</div>
	)
}

export default UserList
