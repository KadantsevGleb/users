import {useEffect} from "react"
import fetchUsers from "./API/fetchUsers"
import UserList from "./components/UserList"
import SearchInput from "./components/SearchInput"
import "./App.css"

function App() {
    const URL = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        fetchUsers(URL)
    }, [])

    return (
        <>
            <SearchInput />
            <UserList />
        </>
    )
}

export default App
