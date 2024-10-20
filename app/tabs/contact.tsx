import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import Divider from "@/components/divider";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

type Transaction = {
	date: Date;
	userId: string;
	amount: number; // Positive for received, negative for sent
};

export type User = {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	balance: number;
	carbonFootprint: number; // New field for carbon footprint
	transactions: Transaction[];
	connections: string[];
};

export const getInitials = (name: string) => {
	const nameParts = name.split(" ");
	const initials = nameParts
		.map((part) => part.charAt(0).toUpperCase())
		.slice(0, 2) // Get first two initials
		.join(""); // Join initials without space
	return initials;
};

const Item = ({ user }: { user: User }) => {
	const { _id, firstName, lastName } = user;
	return (
		<View
			style={{
				paddingBottom: 5,
				flexDirection: "row",
				// justifyContent: "center",
				// alignItems: "center",
			}}
		>
			<TouchableOpacity
				onPress={() => {
					router.navigate({ pathname: "/Profile", params: { _id: _id } });
				}}
			>
				<View style={styles.nameContainer}>
					<View style={styles.initialsContainer}>
						<Text style={styles.initialsText}>
							{getInitials(firstName + " " + lastName)}
						</Text>
					</View>
					<Text style={styles.itemText}>{firstName + " " + lastName}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const contact = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(false);
	const getUsers = () => {
		setLoading(true);
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
				setUsers(data);
			})
			.catch((error) => {
				console.error("Error:", error);
				Toast.show({ type: "error", text1: "fail to load contacts" });
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
			<FlatList
				refreshControl={
					<RefreshControl
						refreshing={loading}
						onRefresh={() => {
							// getUsers();
						}}
					/>
				}
				data={users}
				renderItem={({ item }) => {
					return <Item user={item} />;
				}}
				ItemSeparatorComponent={() => {
					return <Divider />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	itemText: {
		color: "#333",
		fontSize: 18,
		fontWeight: "semibold",
	},

	nameContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	initialsContainer: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: "#078CC0",
		justifyContent: "center",
		alignItems: "center",
	},
	initialsText: {
		color: "#fff",
		fontWeight: "semibold",
	},
});

export default contact;
