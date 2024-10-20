import { User } from "@/app/tabs/contact";
import Toast from "react-native-toast-message";
import { create } from "zustand";

type State = {
	auth: "auth" | "unauth";
	userData?: User;
	users: User[];
};

type Action = {
	setAuth: (auth: "auth" | "unauth") => void;
	setUser: (user: Partial<User>) => void;
	getUsers: () => void;
	getUser: (_id: string) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useMyStore = create<State & Action>((set) => ({
	auth: "unauth",
	users: [],
	setAuth: (auth) => {
		set({ auth });
	},
	setUser: (_user) => {
		set(({ userData }) => ({ userData: { ...(userData as User), ..._user } }));
	},

	getUser: (_id) => {
		fetch(`http://192.168.50.3:3000/users/${_id}`, {
			method: "GET",

			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.status >= 400) throw new Error("failed");
				return response.json();
			})
			.then((data) => {
				set(() => {
					return { userData: data };
				});
			})
			.catch((error) => {
				console.error("Error:", error);
				Toast.show({ type: "error", text1: "fail to load get user" });
			});
	},

	getUsers: () => {
		fetch("http://192.168.50.3:3000/users", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.status >= 400) throw new Error("failed");
				return response.json();
			})
			.then((data) => {
				set({ users: data });
			})
			.catch((error) => {
				console.error("Error:", error);
				Toast.show({ type: "error", text1: "fail to load contacts" });
			});
	},
}));
