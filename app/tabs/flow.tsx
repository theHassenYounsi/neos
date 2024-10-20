import React, { useCallback, useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	RefreshControl,
} from "react-native";
import { router, useFocusEffect } from "expo-router";
import Divider from "@/components/divider";
import { useMyStore } from "@/store/store";

const Item = ({ transaction }: { transaction: Transaction }) => {
	const amountColor = transaction.amount < 0 ? "red" : "green";

	return (
		<View style={styles.itemContainer}>
			<TouchableOpacity
				onPress={() => {
					// router.navigate("/transactionDetails");
				}}
			>
				<Text style={styles.itemText}>
					{transaction.firstName + " " + transaction.lastName}
				</Text>
				<Text style={styles.itemDetail}>
					{new Date(transaction.date).toLocaleString()}
				</Text>
				<Text style={[styles.itemDetail, { color: amountColor }]}>
					{transaction.amount} Joul
				</Text>
			</TouchableOpacity>
		</View>
	);
};

type Transaction = {
	date: string;
	userId: string;
	firstName: string;
	lastName: string;
	amount: number;
};

const Flow = () => {
	const { getUsers, users, userData, getUser } = useMyStore();
	const [loading, setLoading] = useState(false);
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useFocusEffect(
		useCallback(() => {
			setLoading(true);
		}, [])
	);

	useEffect(() => {
		if (loading) {
			getUser(userData?._id as string);
			getUsers();
			fillDetails();
			setLoading(false);
			console.log({ transactions });
		}
	}, [loading]);
	const fillDetails = () => {
		setTransactions(
			userData?.transactions?.map((transaction) => {
				const _user = users.find((user) => {
					return user._id === transaction.userId;
				});

				return {
					date: transaction.date,
					amount: transaction.amount,
					firstName: _user?.firstName as string,
					lastName: _user?.lastName as string,
				};
			})
		);
	};
	return (
		<View style={styles.container}>
			<FlatList
				style={{ height: "100%" }}
				refreshControl={
					<RefreshControl
						refreshing={loading}
						onRefresh={() => {
							setLoading(true);
						}}
					/>
				}
				data={transactions}
				renderItem={({ item, index }) => (
					<Item transaction={item} key={index} />
				)}
				ItemSeparatorComponent={() => <Divider />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",

		paddingHorizontal: 10,
		paddingTop: 5,
	},
	itemContainer: {
		paddingBottom: 5,
		paddingVertical: 10,
	},
	itemText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#333",
	},
	itemDetail: {
		fontSize: 14,
		color: "#555",
	},
});

export default Flow;
