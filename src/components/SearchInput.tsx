import useUserStore from "../userStore"

function SearchInput() {
	const search = useUserStore(state => state.search),
		  setSearch = useUserStore(state => state.setSearch)
	return (
		<>
			<input
				type="text"
				placeholder="Поиск пользователей"
				className="search-input"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
		</>
	)
}

export default SearchInput