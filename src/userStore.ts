import {create} from "zustand";
import type {User} from "./data/types";

type userStore = {
	users: User[];
	setUsers: (value: User[]) => void;
	search: string;
	setSearch: (value: string) => void;
}

const useUserStore = create<userStore>((set) => ({
	users: [],
	setUsers: (value) => set({users: value}),
	search: '',
	setSearch: (value) => set({search: value})
}))

export default useUserStore