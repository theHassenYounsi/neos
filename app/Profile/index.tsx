import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	ViewStyle,
	Button,
	Modal,
	TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import Toast from "react-native-toast-message";
import { getInitials, User } from "../tabs/contact";
import { useMyStore } from "@/store/store";

const Padding = ({
	action,
	style,
}: {
	action?: () => void;
	style?: ViewStyle;
}) => {
	return <View onTouchStart={action ? action : () => {}} style={[{}, style]} />;
};

const ContactDetails = () => {
	const { _id }: { _id: string } = useLocalSearchParams();
	const { userData } = useMyStore();

	const [modalVisible, setModalVisible] = useState(false);
	const [price, setAmount] = useState(0);

	const [user, setUser] = useState<User>();

	useEffect(() => {
		getUser();
	}, []);

	const getUser = () => {
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
				setUser(data);
			})
			.catch((error) => {
				console.error("Error:", error);
				Toast.show({ type: "error", text1: "fail to load contacts" });
			});
	};

	const sendEnergy = (amount: number) => {
		fetch("http://192.168.50.3:3000/transaction", {
			method: "POST",
			body: JSON.stringify({
				senderId: userData?._id,
				recipientId: _id,
				amount,
			}),

			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.status >= 400) throw new Error("failed");
				return response.json();
			})
			.then((data) => {
				console.log("Success:");
			})
			.catch((error) => {
				console.error("Error:", error);
				Toast.show({ type: "error", text1: "fail to send Energy" });
			});
	};

	return (
		<ScrollView style={styles.container} contentContainerStyle={{ gap: 10 }}>
			<View style={styles.avatarContainer}>
				<View style={styles.avatar}>
					<Text style={styles.avatarText}>
						{getInitials(user?.firstName + " " + user?.lastName)}
					</Text>
				</View>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.name}>
					{user?.firstName + " " + user?.lastName}
				</Text>
			</View>

			<View style={styles.detailRow}>
				<FontAwesome name="envelope" size={24} color="#078CC0" />
				<Text style={styles.detailText}>{user?.email}</Text>
			</View>

			<TouchableOpacity
				style={styles.messageButton}
				onPress={() => setModalVisible(true)}
			>
				<Text style={styles.messageButtonText}>Send Energie</Text>
			</TouchableOpacity>

			<Modal transparent={true} animationType="fade" visible={modalVisible}>
				<View style={styles.modalBackground}>
					<Padding
						action={() => setModalVisible(false)}
						style={{ flexGrow: 1 }}
					/>
					<View style={styles.modalContent}>
						<Text style={styles.modalTitle}>Send Amount</Text>

						<TextInput
							style={styles.input}
							placeholder="amount"
							defaultValue={price.toString()}
							onChangeText={(e) => {
								setAmount(parseInt(e));
							}}
							selectTextOnFocus
							autoCapitalize="none"
							inputMode="numeric"
						/>
						<TouchableOpacity
							style={styles.messageButton}
							onPress={() => {
								sendEnergy(price);
								setModalVisible(false);
							}}
						>
							<Text style={styles.messageButtonText}>Confirm</Text>
						</TouchableOpacity>
					</View>
					<Padding
						action={() => setModalVisible(false)}
						style={{ flexGrow: 1 }}
					/>
				</View>
			</Modal>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f9f9f9",
	},
	avatarContainer: {
		alignItems: "center",
		paddingVertical: 20,
	},
	avatar: {
		width: 120,
		height: 120,
		borderRadius: 60,
		backgroundColor: "#078CC0",
		justifyContent: "center",
		alignItems: "center",
	},
	avatarText: {
		fontSize: 36,
		color: "#fff",
		fontWeight: "bold",
	},
	infoContainer: {
		alignItems: "center",
		paddingBottom: 20,
	},
	name: {
		fontSize: 26,
		fontWeight: "bold",
	},
	detailRow: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 10,
	},
	detailText: {
		fontSize: 18,
		paddingLeft: 10,
	},
	messageButton: {
		backgroundColor: "#078CC0",
		paddingVertical: 12,
		borderRadius: 10,
		alignItems: "center",
	},
	messageButtonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
	modalBackground: {
		height: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		backgroundColor: "white",
		width: 300,
		alignItems: "stretch",
		borderRadius: 15,
		gap: 10,
		padding: 15,
		alignSelf: "center",
	},
	modalTitle: {
		alignSelf: "center",
	},
	input: {
		width: "100%",
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 5,
		// marginBottom: 16,
		paddingHorizontal: 8,
	},
});

export default ContactDetails;
