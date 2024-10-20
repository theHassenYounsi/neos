import { create } from "zustand";

type State = {
	auth: "auth" | "unauth";
	user: any;
};

type Action = { setAuth: (auth: "auth" | "unauth") => void };

// Create your store, which includes both state and (optionally) actions
export const useMyStore = create<State & Action>((set) => ({
	auth: "unauth",
	user: {},
	setAuth: (auth) => {
		set({ auth });
	},
}));
